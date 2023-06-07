import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../FirebaseSDK.js';
import { collection, getDocs, orderBy, query, updateDoc, doc } from 'firebase/firestore';
import styled from 'styled-components';
import BlogImg from './BlogImg.webp';
import { AiOutlineSearch, AiOutlineUp, AiOutlineDown } from 'react-icons/ai';

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BlogTitle = styled.h1`
  text-align: center;
`;

const BlogImage = styled.img`
  width: 100%;
  max-width: 800px;
  padding-bottom: 20px;
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 80%;
`;

const PostCard = styled.div`
  background-color: #fff;
  cursor: pointer;
`;

const Category = styled.p`
  font-weight: bold;
  padding-left: 20px;
`;

const Tags = styled.p`
  color: #888;
  padding-left: 20px;
`;


const PostTitle = styled.h2`
  margin-bottom: 10px;
  padding-left: 20px;
`;

const PostDate = styled.p`
  color: #888;
  margin-bottom: 10px;
  padding-left: 0px;
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const FilterMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  padding 10px;
`;

const FilterButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 10px;
  font-size: 16px;
  padding 10px;
`;

const VoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
`;

const VoteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
`;

const FilterSelect = styled.select`
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 10px;
  font-size: 16px;
  padding 10px;
`;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [filter, setFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState(''); // Add this line
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const handleUpvote = async (postId, currentUpvotes) => {
    const postRef = doc(db, 'posts', postId);
    await updateDoc(postRef, {
      upvotes: currentUpvotes + 1
    });
    fetchPosts();
  };

  const handleDownvote = async (postId, currentDownvotes) => {
    const postRef = doc(db, 'posts', postId);
    await updateDoc(postRef, {
      downvotes: currentDownvotes + 1
    });
    fetchPosts();
  };

  const fetchPosts = async () => {
    const postsCollection = collection(db, 'posts');
    const q = query(postsCollection, orderBy("date", "desc"));
    const postSnapshot = await getDocs(q);
    let postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
    if (filter === 'Vote') {
      postList = postList.sort((a, b) => ((b.upvotes || 0) - (b.downvotes || 0)) - ((a.upvotes || 0) - (a.downvotes || 0)));
    }
  
    if (categoryFilter) {
      postList = postList.filter(post => post.category === categoryFilter);
    }
  
    setPosts(postList);
  
  };
  

  useEffect(() => {
    fetchPosts();
  }, [filter, categoryFilter]); // Add categoryFilter here
  

  useEffect(() => {
    const fetchCategories = async () => {
      const postsCollection = collection(db, 'posts');
      const postSnapshot = await getDocs(postsCollection);
      const postList = postSnapshot.docs.map(doc => doc.data());
      const uniqueCategories = [...new Set(postList.map(post => post.category))];
      setCategories(uniqueCategories);
    };
  
    fetchCategories();
  }, []);
  
  const handleOpenPost = (postId) => {
    console.log("Navigating to post with ID: ", postId);
    navigate(`/blog/${postId}`);
  };

  const categoryOptions = categories.map((category, index) => (
    <option key={index} value={category}>{category}</option>
  ));

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
    console.log(e.target.value); // Log the new categoryFilter state
  };
  

  return (
    <BlogContainer>
      <BlogTitle>Blog</BlogTitle>
      
      {showSearch && <input type="text" placeholder="Search..." onChange={event => setSearchTerm(event.target.value)} />}
      <FilterMenu>
          <FilterButton> <AiOutlineSearch onClick={() => setShowSearch(!showSearch)} /></FilterButton>
          <FilterButton onClick={() => setFilter('Recent')}>Recent</FilterButton>
          <FilterButton onClick={() => setFilter('Vote')}>Vote</FilterButton>
          <FilterSelect value={categoryFilter} onChange={handleCategoryFilterChange}>
  <option value="">Category</option>
  {categoryOptions}
</FilterSelect>

        </FilterMenu>
      <PostGrid>
      {posts
  .filter((post) => {
    if (searchTerm === "") {
      return post;
    } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return post;
    }
  })
  .filter((post) => {
    if (categoryFilter === post.category || categoryFilter === '') {
      return post;
    }
  })
  .map((post, index) => (
  <PostCard key={index} onClick={() => handleOpenPost(post.id)}>
    <PostImage src={post.image} alt={post.title} />
    <PostTitle>{post.title}</PostTitle>
    <Category>{post.category}</Category>
    <Tags>{post.tags && Array.isArray(post.tags) ? post.tags.join(', ') : ''}</Tags>
    <VoteContainer>
      <PostDate>{post.date && post.date.toDate().toLocaleDateString()}</PostDate>
      <div>
        <span>{(post.upvotes || 0) - (post.downvotes || 0)}</span>
        <VoteButton onClick={(e) => {e.stopPropagation(); handleUpvote(post.id, post.upvotes || 0);}}><AiOutlineUp /></VoteButton>
        <VoteButton onClick={(e) => {e.stopPropagation(); handleDownvote(post.id, post.downvotes || 0);}}><AiOutlineDown /></VoteButton>
      </div>
    </VoteContainer>
  </PostCard>
))}

      </PostGrid>
    </BlogContainer>
  );
}

export default Blog;
