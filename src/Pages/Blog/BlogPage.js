import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import Blog from './Blog.js';
import BlogEditor from './BlogEditor/BlogEditor.js';
import BlogAdmin from './BlogAdmin.js';

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

const ToolbarLink = styled(Link)`
  flex-grow: 1;
  padding: 10px 0;
  border: none;
  background-color: ${props => props.selected ? '#333' : '#fff'};
  color: ${props => props.selected ? '#fff' : '#333'};
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const BlogContainer = styled.div`
  width: 100%;
`;

const BlogPage = () => {
  return (
    <BlogContainer>
      <ToolbarContainer>
        <ToolbarLink to="/blog">
          Blog
        </ToolbarLink>
        <ToolbarLink to="blogadmin">
          Blog Admin
        </ToolbarLink>
        <ToolbarLink to="blogeditor">
          Blog Editor
        </ToolbarLink>

      </ToolbarContainer>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="blogadmin" element={<BlogAdmin />} />
        <Route path="blogeditor" element={<BlogEditor />} />
      </Routes>
    </BlogContainer>
  );
};


export default BlogPage;
