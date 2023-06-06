import React, {useContext, useEffect, useState } from 'react';
import { db } from '../../FirebaseSDK.js';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlusCircle, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import UserContext from '../../UserContext.js';

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

const Icon = styled.div`
  cursor: pointer;
`;

const BlogAdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BlogAdminTitle = styled.h1`
  text-align: center;
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 80%;
`;

const PostCard = styled.div`
  border: 1px solid #ddd;
  background-color: #fff;
  cursor: pointer;
  position: relative;
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
  margin-bottom: 10px;
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

const Div1 = styled.button`
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Category = styled.p`
  font-weight: bold;
  padding-left: 20px;
`;

const Tags = styled.p`
  color: #888;
  padding-left: 20px;
`;



const BlogAdmin = () => {
    const { isLoggedIn } = useContext(UserContext);
  
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

    const handleOpenPost = (postId) => {
      navigate(`/blog/${postId}`);
    };
    
  
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'posts');
      const postSnapshot = await getDocs(postsCollection);
      let postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
      // Sort the posts by date
      postList.sort((a, b) => {
        const dateA = a.date && typeof a.date.toDate === 'function' ? a.date.toDate() : new Date();
        const dateB = b.date && typeof b.date.toDate === 'function' ? b.date.toDate() : new Date();
        return dateB - dateA; // This will sort in descending order. Use dateA - dateB for ascending order.
      });
    
      setPosts(postList);
    };
    
  
    useEffect(() => {
      fetchPosts();
    }, []);
  

    const handleAddPost = () => {
        navigate('/blog/blogeditor');
      };

      if (!isLoggedIn) {
        return <Div1>You must be logged in to access this page.</Div1>;
      }

      return (
        <BlogAdminContainer>
          <BlogAdminTitle>
            Blog Admin
            <AddButton onClick={handleAddPost}>
              <AiOutlinePlusCircle size={24} /> {/* This is the plus icon */}
            </AddButton>
          </BlogAdminTitle>
          <PostGrid>
          {posts.map((post, index) => (
            <PostCard key={index} onClick={() => handleOpenPost(post.id)}>
              <PostImage src={post.image} alt={post.title} /> {/* Use the image from the database */}
              <PostTitle>{post.title}</PostTitle>
              <Category>{post.category}</Category>
              <Tags>{post.tags && Array.isArray(post.tags) ? post.tags.join(', ') : ''}</Tags>
              <PostDate>{post.date && typeof post.date.toDate === 'function' ? post.date.toDate().toLocaleDateString() : 'No date'}</PostDate>
              <IconContainer>
                <Icon onClick={(e) => {e.stopPropagation(); handleEditPost(post.id);}}><AiFillEdit size={24} /></Icon>
                <Icon onClick={(e) => {e.stopPropagation(); handleDeletePost(post.id);}}><AiFillDelete size={24} /></Icon>
              </IconContainer>
            </PostCard>
          ))}
          </PostGrid>
        </BlogAdminContainer>
      );
    };
    
    export default BlogAdmin;