import React, { useEffect, useState } from 'react';
import { db } from '../../FirebaseSDK.js';
import { collection, getDocs } from 'firebase/firestore';
import styled from 'styled-components';
import BlogImg from './BlogImg.webp';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', // adjust this value to change the modal's width
    height: '80%', // adjust this value to change the modal's height
  },
};

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

const PostContent = styled.p`
  color: #333;
`;




const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpenModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
        <PostCard key={index} onClick={() => handleOpenModal(post)}>
          <PostTitle>{post.title}</PostTitle>
          <PostDate>{post.date && post.date.toDate().toLocaleDateString()}</PostDate>
        </PostCard>
      ))}
      <Modal 
        isOpen={isModalOpen} 
        onRequestClose={handleCloseModal} 
        style={customStyles}
      >
        {selectedPost && (
          <>
            <h2>{selectedPost.title}</h2>
            <PostDate>{selectedPost.date && selectedPost.date.toDate().toLocaleDateString()}</PostDate>
            <p>{selectedPost.content}</p>
          </>
        )}
      </Modal>
    </BlogContainer>
  );
}

export default Blog;