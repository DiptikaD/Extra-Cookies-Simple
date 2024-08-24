import React, { useState } from 'react';
import { Grid, Button, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import CreatePostModal from './CreatePostModal';
import PostsDisplay from './PostsDisplay';
import { Post } from './types';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const addPost = (newPost: Post) => {
    console.log('New post submitted: ', newPost);
  };

  return (
    <>
      <Typography variant="h5" component="h1" align='center' padding={2.5}>
        Posts in the Neighbourhood
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Button variant="contained" color="primary" onClick={() => setShowModal(true)}>
          Create Post
        </Button>
      </Box>

      <Grid container spacing={4} style={{ marginTop: '16px' }}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PostsDisplay/>
            <CreatePostModal
              show= {showModal}
              onHide = {() => setShowModal(false)}
          
            />
            <button onClick={() => setShowModal(true)}>Create Post</button>
          </Grid>
        ))}
      </Grid>
        <PostsDisplay/>
      <CreatePostModal show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
};

export default HomePage;
