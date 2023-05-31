import React, { useState, useEffect } from 'react';
import { db } from '../../../FirebaseSDK.js';
import { collection, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiFillDelete } from 'react-icons/ai';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 80%;
  margin: auto;
`;


const EditorTitle = styled.h1`
  text-align: center;
`;

const EditorForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const EditorInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
`;

const EditorTextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
  height: 400px;
  align-items: center;
`;

const EditorSubmit = styled.input`
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BlogEditor = () => {
  const { postId } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();


  // Log the postId
  console.log(postId);


  useEffect(() => {
    const fetchPost = async () => {
      if (postId) {
        const postDoc = await getDoc(doc(db, 'posts', postId));
        if (postDoc.exists()) {
          const postData = postDoc.data();
          setTitle(postData.title);
          setContent(postData.content);
        }
      }
    };

    fetchPost();
  }, [postId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // If postId exists, update the existing post. Otherwise, create a new post.
    if (postId) {
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, {
        title: title,
        content: content,
        date: new Date() // update the date field to the current date
      });
      console.log("Document updated with ID: ", postId);
    } else {
      // Create new document in Firestore
      const docRef = await addDoc(collection(db, "posts"), {
        title: title,
        content: content,
        date: new Date() // set the date field to the current date
      });
      console.log("Document written with ID: ", docRef.id);
    }

    setTitle('');
    setContent('');
  };
  

  return (
    <EditorContainer>
      <EditorHeader>
      <AiOutlineArrowLeft size={24} onClick={() => navigate('/blog/blogadmin')} />
        <EditorTitle>Blog Editor</EditorTitle>
        <AiFillDelete size={24} /> {/* This is the trash icon */}
      </EditorHeader>
      <EditorForm onSubmit={handleSubmit}>
        <EditorInput type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <EditorTextArea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
        <EditorSubmit type="submit" value="Submit" />
      </EditorForm>
    </EditorContainer>
  );
}

export default BlogEditor;
