import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../FirebaseSDK.js';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import styled from 'styled-components';
import BlogImg from './BlogImg.webp';

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
  border: 1px solid #ddd;
  // border-radius: 10px;
  // padding: 20px;
  background-color: #fff;
  cursor: pointer;
`;

const PostTitle = styled.h2`
  margin-bottom: 10px;
  padding-left: 20px;
`;

const PostDate = styled.p`
  color: #888;
  margin-bottom: 10px;
  padding-left: 20px;
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  // border-radius: 10px;
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

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'posts');
      const q = query(postsCollection, orderBy("date", "desc"));
      const postSnapshot = await getDocs(q);
      const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postList);
    };

    fetchPosts();
  }, []);

  const handleOpenPost = (postId) => {
    console.log("Navigating to post with ID: ", postId);
    navigate(`/blog/${postId}`);
  };

  return (
    <BlogContainer>
      {/* <BlogImage src={BlogImg} alt="Blog" /> */}
      <BlogTitle>Blog</BlogTitle>
      <FilterMenu>
        <FilterButton>All</FilterButton>
        <FilterButton>Recent</FilterButton>
        <FilterButton>Starred</FilterButton>
      </FilterMenu>
      <PostGrid>
        {posts.map((post, index) => (
          <PostCard key={index} onClick={() => handleOpenPost(post.id)}>
            <PostImage src={post.image} alt={post.title} /> {/* Use the image from the database */}
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.date && post.date.toDate().toLocaleDateString()}</PostDate>
          </PostCard>
        ))}
      </PostGrid>
    </BlogContainer>
  );
}

export default Blog;
