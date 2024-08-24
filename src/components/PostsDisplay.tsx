import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, Container } from '@mui/material';
import useFetchPosts from './useFetchPosts';
import { Post } from './types';

const PostsDisplay: React.FC = () => {
  const { posts, loading, error } = useFetchPosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
      <Typography variant="h4" component="h1" align='center' gutterBottom>
        Food Posts
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post: Post) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={post.title}
                height="140"
                image={post.image}
                title={post.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Location: {post.location} <br />
                  Price: ${post.price} <br />
                  Availability: {new Date(post.availability).toLocaleString()} <br />
                {post.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostsDisplay;
