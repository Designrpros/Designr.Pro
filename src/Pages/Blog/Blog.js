import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../FirebaseSDK.js';
import { collection, getDocs } from 'firebase/firestore';
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

const PostCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  width: 80%;
  margin-bottom: 20px;
  cursor: pointer;
`;

const PostTitle = styled.h2`
  margin-bottom: 10px;
`;

const PostDate = styled.p`
  color: #888;
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
      const postSnapshot = await getDocs(postsCollection);
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
      <BlogImage src={BlogImg} alt="Blog" />
      <BlogTitle>Blog</BlogTitle>
      <FilterMenu>
        <FilterButton>All</FilterButton>
        <FilterButton>Recent</FilterButton>
        <FilterButton>Starred</FilterButton>
      </FilterMenu>
      {posts.map((post, index) => (
      <PostCard key={index} onClick={() => handleOpenPost(post.id)}>
      <PostTitle>{post.title}</PostTitle>
      <PostDate>{post.date && post.date.toDate().toLocaleDateString()}</PostDate>
    </PostCard>
    
      ))}
    </BlogContainer>
  );
}

export default Blog;