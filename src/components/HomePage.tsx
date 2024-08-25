import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import CreatePostModal from './CreatePostModal';
import PostsDisplay from './PostsDisplay';
import { Post } from './types';
import GoogleMap from './googleMap';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Grid container spacing={4} justifyContent={'center'} style={{ marginTop: '16px' }}>
      <GoogleMap/>

        <Grid marginTop={'16px'} marginBottom={'16px'}>
        <Button variant="contained" color="primary" onClick={() => setShowModal(true)}>
         Create Posts
        </Button>
        </Grid>

        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} >
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
