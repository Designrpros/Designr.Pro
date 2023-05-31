import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../FirebaseSDK.js';
import { doc, getDoc } from 'firebase/firestore';
import styled from 'styled-components';
import { AiOutlineArrowLeft} from 'react-icons/ai';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
`;

const PostTitle = styled.h2`
  /* Add your styles for the title here */
`;

const PostDate = styled.p`
  /* Add your styles for the date here */
`;

const PostContent = styled.p`
  /* Add your styles for the content here */
`;

const BackButton = styled.button`
  position: absolute;
  top: 120px;
  left: 20px;
  border: none;
  background: none;

`;

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      console.log(postId);
      const postDoc = await getDoc(doc(db, 'posts', postId));
      if (postDoc.exists()) {
        const postData = postDoc.data();
        // Replace the placeholder with line breaks when retrieving the data
        const formattedContent = postData.content.replace(/<br\/>/g, '\n');
        setPost({ ...postData, content: formattedContent });
      }
    };
  
    fetchPost();
  }, [postId]);

  console.log(post);

  if (!post) {
    return <div>Loading...</div>;
  }

  // Split the content string by line breaks and map each line to a JSX element
  const formattedContent = post.content.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <PostContainer>
      <BackButton>
        <AiOutlineArrowLeft size={24} onClick={() => navigate('/blog')} />
      </BackButton>
      <PostTitle>{post.title}</PostTitle>
      <PostDate>{post.date && post.date.toDate().toLocaleDateString()}</PostDate>
      <PostContent>{formattedContent}</PostContent>
    </PostContainer>
  );
};

export default BlogPost;
