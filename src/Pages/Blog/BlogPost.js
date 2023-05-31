import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../FirebaseSDK.js';
import { doc, getDoc } from 'firebase/firestore';
import styled from 'styled-components';

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

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      console.log(postId); // Log the postId
      const postDoc = await getDoc(doc(db, 'posts', postId));
      if (postDoc.exists()) {
        setPost(postDoc.data());
      }
    };
  
    fetchPost();
  }, [postId]);

  console.log(post);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostDate>{post.date && post.date.toDate().toLocaleDateString()}</PostDate>
      <PostContent>{post.content}</PostContent>
    </PostContainer>
  );
};

export default BlogPost;
