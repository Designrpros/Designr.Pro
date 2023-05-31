import React, { useEffect, useState } from 'react';
import { db } from '../../FirebaseSDK.js';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';



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

const AddButton = styled.button`
  background-color: transparent; /* No background */
  border: none;
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
    const navigate = useNavigate();
  
    const handleDeletePost = async (postId) => {
      await deleteDoc(doc(db, 'posts', postId));
      // Refresh posts after deletion
      fetchPosts();
    };
  
    const handleEditPost = (postId) => {
        navigate(`/blog/blogeditor/${postId}`);
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
  

    const handleAddPost = () => {
        navigate('/blog/blogeditor');
      };

      
    return (
      <BlogAdminContainer>
        <BlogAdminTitle>
            Blog Admin
        <AddButton onClick={handleAddPost}>
            <AiOutlinePlusCircle size={24} /> {/* This is the plus icon */}
        </AddButton>
        </BlogAdminTitle>
        {posts.map((post, index) => (
          <PostCard key={index}>
            <div>
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{post.date && typeof post.date.toDate === 'function' ? post.date.toDate().toLocaleDateString() : 'No date'}</PostDate>
            </div>
            <div>
              <EditButton onClick={() => handleEditPost(post.id)}>Edit</EditButton>
              <DeleteButton onClick={() => handleDeletePost(post.id)}>Delete</DeleteButton>
            </div>
          </PostCard>
        ))}
      </BlogAdminContainer>
    );
  }
  

export default BlogAdmin;