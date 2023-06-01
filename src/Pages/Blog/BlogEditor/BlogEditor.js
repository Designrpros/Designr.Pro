import React, { useState, useEffect } from 'react';
import { db } from '../../../FirebaseSDK.js';
import { collection, addDoc, doc, updateDoc, getDoc, deleteDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiFillDelete } from 'react-icons/ai';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css'; // import styles


const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 80%;
  margin: auto;
`;

const EditorForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const EditorInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  background: none;
  border: none;
  font-size: 20px; // Increase the font size
  height: 50px; // Increase the height of the input field
  width: 100%; // Make the input field take up the full width of its container
`;



const EditorSubmit = styled.input`
max-width: 800px;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: right;
  width: 100%;
`;

const StyledQuill = styled(ReactQuill)`
max-width: 800px;

  .ql-editor {
    min-height: 400px;
  }
`;



const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                         // remove formatting button

    ['link', 'image', 'video']                         // link and image, video
  ],
};



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
  
    // Replace line breaks with a placeholder before saving the data
    const formattedContent = content.replace(/\n/g, '<br/>');

    // If postId exists, update the existing post. Otherwise, create a new post.
    if (postId) {
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, {
        title: title,
        content: content, // content is now HTML
        date: new Date()
      });
      console.log("Document updated with ID: ", postId);
    } else {
      const docRef = await addDoc(collection(db, "posts"), {
        title: title,
        content: content, // content is now HTML
        date: new Date()
      });
      console.log("Document written with ID: ", docRef.id);
    }
  
    setTitle('');
    setContent('');
  };
  
  const handleDeleteDraft = async () => {
    if (postId) {
      await deleteDoc(doc(db, 'posts', postId));
      console.log("Document deleted with ID: ", postId);
    }
    navigate('/blog/blogadmin');
  };
  

  return (
    <EditorContainer>
      
      <EditorForm onSubmit={handleSubmit}>
      <AiOutlineArrowLeft size={24} onClick={() => navigate('/blog/blogadmin')} />
        <EditorInput type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <EditorHeader>
      </EditorHeader>
        <StyledQuill value={content} onChange={setContent} modules={modules} />        
        <EditorSubmit type="submit" value="Submit" />
      </EditorForm>
    </EditorContainer>
  );
}

export default BlogEditor;
