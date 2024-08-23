import { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from './types';

const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get<Post[]>('http://localhost:8080/api/posts', {
          headers: {
            'Authorization': `Bearer ${token}`, //use token stored from login to get posts
            'Content-Type': 'application/json',
          },
        });
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch posts.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default useFetchPosts;
