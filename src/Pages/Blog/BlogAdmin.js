import React, { useEffect, useState } from 'react';
import { db } from '../../FirebaseSDK.js';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import styled from 'styled-components';
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

const BlogAdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BlogAdminTitle = styled.h1`
  text-align: center;
`;

const PostCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  width: 80%;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
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

const EditButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: #f44336; /* Red */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const BlogAdmin = () => {
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
  
    const handleDeletePost = async (postId) => {
      await deleteDoc(doc(db, 'posts', postId));
      // Refresh posts after deletion
      fetchPosts();
    };
  
    const handleEditPost = async (postId, updatedPost) => {
      await updateDoc(doc(db, 'posts', postId), updatedPost);
      // Refresh posts after update
      fetchPosts();
    };
  
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'posts');
      const postSnapshot = await getDocs(postsCollection);
      const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postList);
    };
  
    useEffect(() => {
      fetchPosts();
    }, []);
  
    return (
      <BlogAdminContainer>
        <BlogAdminTitle>Blog Admin</BlogAdminTitle>
        {posts.map((post, index) => (
          <PostCard key={index}>
            <div>
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{post.date && typeof post.date.toDate === 'function' ? post.date.toDate().toLocaleDateString() : 'No date'}
</PostDate>
              <PostContent>{post.content}</PostContent>
            </div>
            <div>
              <EditButton onClick={() => handleOpenModal(post)}>Edit</EditButton>
              <DeleteButton onClick={() => handleDeletePost(post.id)}>Delete</DeleteButton>
            </div>
          </PostCard>
        ))}
        <Modal 
            isOpen={isModalOpen} 
            onRequestClose={handleCloseModal} 
            style={customStyles}
            >
            {selectedPost && (
                <>
                <h2>Edit Post</h2>
                <label>
                    Title:
                    <input type="text" value={selectedPost.title} onChange={(e) => setSelectedPost({...selectedPost, title: e.target.value})} />
                </label>
                <label>
                    Content:
                    <textarea value={selectedPost.content} onChange={(e) => setSelectedPost({...selectedPost, content: e.target.value})} />
                </label>
                <EditButton onClick={() => handleEditPost(selectedPost.id, selectedPost)}>Save</EditButton>
                </>
            )}
        </Modal>
    </BlogAdminContainer>
    );
}

export default BlogAdmin;