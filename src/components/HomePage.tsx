import React, { useState } from 'react';
import { Grid, Button, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import CreatePostModal from './CreatePostModal';
import PostsDisplay from './PostsDisplay';
import { Container } from 'react-bootstrap';
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
              addPost = {addPost}
            />
            <button onClick={() => setShowModal(true)}>Create Post</button>
            {/* <Card>
              <CardMedia
                component="img"
                alt={post.name}
                height="140"
                image={post.image}
                title={post.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.name}
                </Typography>
                <Container>
                <Typography variant="body2" color="textSecondary">
                  Location: {post.location} <br />
                  Price: ${post.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Availability: {post.availability.toLocaleString()} <br /> 
                  Category: {post.category}
                </Typography>
                </Container>
              </CardContent>
            </Card> */}
          </Grid>
        ))}
      </Grid>
        <PostsDisplay/>
      <CreatePostModal show={showModal} onHide={() => setShowModal(false)} addPost={addPost} />
    </>
  );
};

export default HomePage;
