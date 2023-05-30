import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BlogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BlogCard = styled.div`
  width: 45%;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogTitle = styled.h2`
  font-size: 1.5em;
  margin: 20px 0;
`;

const BlogText = styled.p`
  font-size: 1em;
`;

const AddBlogButton = styled.button`
  margin: 20px 0;
`;

const Blog1 = () => {
  const [blogPosts, setBlogPosts] = useState([
    { id: 1, title: 'Blog Post 1', text: 'This is the first blog post.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Blog Post 2', text: 'This is the second blog post.', imageUrl: 'https://via.placeholder.com/150' },
    // Add more blog posts here
  ]);

  const navigate = useNavigate();

  const handleAddBlogClick = () => {
    navigate('/add-blog');
  };

  return (
    <BlogContainer>
      {blogPosts.map((post) => (
        <BlogCard key={post.id}>
          <BlogImage src={post.imageUrl} alt={post.title} />
          <BlogTitle>{post.title}</BlogTitle>
          <BlogText>{post.text}</BlogText>
        </BlogCard>
      ))}
      <AddBlogButton onClick={handleAddBlogClick}>Add Blog Post</AddBlogButton>
    </BlogContainer>
  );
};

export default Blog1;

