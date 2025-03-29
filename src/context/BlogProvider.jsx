import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const BlogContext = createContext();

// BlogProvider Component - Provides blog-related data and functions
export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://dummyjson.com/posts');
        const fetchedPosts = response.data.posts.map(post => ({
          ...post,
          views: Math.floor(Math.random() * 10000),
          reactions: {
            likes: typeof post.reactions === 'object' ? 
              (post.reactions.likes || Math.floor(Math.random() * 100)) : 
              Math.floor(Math.random() * 100),
            dislikes: typeof post.reactions === 'object' ? 
              (post.reactions.dislikes || Math.floor(Math.random() * 20)) : 
              Math.floor(Math.random() * 20)
          }
        }));
        
        setPosts(fetchedPosts);
        setFilteredPosts(fetchedPosts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to fetch posts. Please try again later.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // handleSearch Function - Filters posts based on the search query
  const handleSearch = (query) => {
    if (!query) {
      setFilteredPosts(posts);
      return;
    }
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.body.toLowerCase().includes(query.toLowerCase()) ||
        (post.tags && post.tags.some(tag => 
          tag.toLowerCase().includes(query.toLowerCase())))
    );
    
    setFilteredPosts(filtered);
  };

  // handleReadMore Function - Sets the selected post for reading more
  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  // handleCloseModal Function - Closes the post modal
  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const contextValue = {
    posts,
    filteredPosts,
    loading,
    error,
    selectedPost,
    handleSearch,
    handleReadMore,
    handleCloseModal
  };

  return (
    <BlogContext.Provider value={contextValue}>
      {children}
    </BlogContext.Provider>
  );
}

// Custom Hook - Access BlogContext values
export function useBlogContext() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
}