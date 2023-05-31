import React, { useEffect, useState } from 'react';
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
  max-width: 600px;
`;

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'posts');
      const postSnapshot = await getDocs(postsCollection);
      const postList = postSnapshot.docs.map(doc => doc.data());
      setPosts(postList);
    };

    fetchPosts();
  }, []);

  return (
    <BlogContainer>
      <BlogTitle>Blog</BlogTitle>
      <BlogImage src={BlogImg} alt="Blog" />
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </BlogContainer>
  );
};

export default Blog;