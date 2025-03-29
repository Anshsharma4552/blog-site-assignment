import React, { useState } from "react";
import { BlogCard } from "./BlogCard";
import { LoadMoreButton } from "./LoadMoreButton";
import { BlogPostModal } from './BlogPostModal';
import { useBlogContext } from '../../context/BlogProvider';

// BlogGrid Component - Displays a grid of blog posts
export function BlogGrid() {
  const [displayCount, setDisplayCount] = useState(9);
  const { 
    filteredPosts, 
    loading, 
    error,
    selectedPost,
    handleReadMore,
    handleCloseModal
  } = useBlogContext();
  
  // handleLoadMore Function - Loads more posts when the button is clicked
  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 9);
  };

  if (loading) {
    return (
      <div className="max-w-screen-xl mx-auto py-12 px-8 text-center">
        <p className="text-lg text-gray-600">Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-screen-xl mx-auto py-12 px-8 text-center">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <section className="max-w-screen-xl mx-auto my-0 pt-0 pb-24 px-8 max-sm:pt-0 max-sm:pb-16 max-sm:px-4">
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No posts found. Try a different search term.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-[repeat(3,1fr)] gap-8 mb-16 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
            {/* BlogCard Component - Displays an individual blog post */}
            {filteredPosts.slice(0, displayCount).map((post, index) => (
              <BlogCard 
                key={post.id || index} 
                post={post} 
                onReadMore={handleReadMore}
              />
            ))}
          </div>
          {/* LoadMoreButton Component - Button to load more posts */}
          {displayCount < filteredPosts.length && (
            <div className="flex justify-center">
              <LoadMoreButton onClick={handleLoadMore} />
            </div>
          )}
        </>
      )}

      {/* BlogPostModal Component - Displays full post details */}
      <BlogPostModal 
        isOpen={!!selectedPost} 
        onClose={handleCloseModal} 
        post={selectedPost} 
      />
    </section>
  );
}

export default BlogGrid;