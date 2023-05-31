import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../FirebaseSDK.js';
import { doc, getDoc } from 'firebase/firestore';

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
    <div>
      <h2>{post.title}</h2>
      <p>{post.date && post.date.toDate().toLocaleDateString()}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
