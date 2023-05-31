import React, { useState } from 'react';
import { db } from '../../../FirebaseSDK.js';
import { collection, addDoc } from 'firebase/firestore';
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
  height: 500px;
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
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Create new document in Firestore
    const docRef = await addDoc(collection(db, "posts"), {
      title: title,
      content: content
    });
  
    console.log("Document written with ID: ", docRef.id);
    setTitle('');
    setContent('');
  };

  return (
    <EditorContainer>
      <EditorHeader>
        <AiOutlineArrowLeft size={24} /> {/* This is the back arrow icon */}
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
