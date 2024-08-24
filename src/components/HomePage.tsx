import React, { useState } from 'react';
import { Grid, Button, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import CreatePostModal from './CreatePostModal';
import PostsDisplay from './PostsDisplay';
import { Post } from './types';
import GoogleMap from './googleMap';
import { CenterFocusStrong } from '@mui/icons-material';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const addPost = (newPost: Post) => {
    console.log('New post submitted: ', newPost);
  };

  // Example POI data, adjust according to your needs
  const locations = [
    { key: 'operaHouse', location: { lat: -33.8567844, lng: 151.213108 } },
    { key: 'tarongaZoo', location: { lat: -33.8472767, lng: 151.2188164 } },
    { key: 'manlyBeach', location: { lat: -33.8209738, lng: 151.2563253 } },
    // Add more POIs as needed
  ];

  return (
    <>
      
      
      {/* Integrate GoogleMap component */}
      
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
