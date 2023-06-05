import React, { useState, useEffect } from 'react';
import { db } from '../../../FirebaseSDK.js';
import { collection, addDoc, doc, updateDoc, getDoc, deleteDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiFillDelete } from 'react-icons/ai';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css'; // import styles
import BlogImg from './BlogImg.webp';


const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['link', 'image', 'video'],
    ['clean']                                         // remove formatting button
  ]
};

const EditorContainer = styled.div`
  position: relative;
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
  background: none;
  border: none;
  font-size: 20px; // Increase the font size
  height: 50px; // Increase the height of the input field
  width: 100%; // Make the input field take up the full width of its container
`;



const EditorSubmit = styled.input`
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const BackButton = styled(AiOutlineArrowLeft)`
  position: absolute;
  top: 10px;
  left: 1px;
  cursor: pointer;
`;

const BlogEditor = () => {
  const { postId } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const [image, setImage] = useState(BlogImg); // Initialize image state with the default image

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
          setImage(postData.image || BlogImg); // Use the image from the database, or the default image if it doesn't exist
        }
      }
    };

    fetchPost();
  }, [postId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Extract the first image from the content
    const firstImageMatch = content.match(/<img[^>]+src="([^">]+)"/);
    const firstImageSrc = firstImageMatch ? firstImageMatch[1] : BlogImg;
  
    // Replace line breaks with a placeholder before saving the data
    const formattedContent = content.replace(/\n/g, '<br/>');

    // If postId exists, update the existing post. Otherwise, create a new post.
    if (postId) {
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, {
        title: title,
        content: content, // content is now HTML
        date: new Date(),
        image: firstImageSrc // Save the image in the database
      });
      console.log("Document updated with ID: ", postId);
    } else {
      const docRef = await addDoc(collection(db, "posts"), {
        title: title,
        content: content, // content is now HTML
        date: new Date(),
        image: firstImageSrc // Save the image in the database
      });
      console.log("Document written with ID: ", docRef.id);
    }
  
    setTitle('');
    setContent('');
  };
  

  return (
    <EditorContainer>
      <BackButton size={24} onClick={() => navigate('/blog/blogadmin')} />
      <EditorForm onSubmit={handleSubmit}>
        <EditorInput type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <ReactQuill value={content} onChange={setContent} modules={modules} />
        <EditorSubmit type="submit" value="Submit" />
      </EditorForm>
    </EditorContainer>
  );
}

export default BlogEditor;