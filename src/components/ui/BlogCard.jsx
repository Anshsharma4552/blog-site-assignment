import React from 'react';
import { Eye, MessageSquareMore, ThumbsUp } from 'lucide-react';

export function BlogCard({ post, onReadMore }) {
  // Function to truncate text to a specific length
  const truncateText = (text, maxLength = 150) => {
    return text.length > maxLength 
      ? `${text.slice(0, maxLength)}...` 
      : text;
  };
  
  // Function to format large view counts in a readable format
  const formatViews = (views) => {
    return views >= 1000 
      ? `${(views / 1000).toFixed(1)}k` 
      : views;
  };

  // Function to get the number of likes safely
  const getLikes = () => {
    if (!post.reactions) return 0;
    if (typeof post.reactions === 'object' && 'likes' in post.reactions) {
      return post.reactions.likes;
    }
    return 0; // Default value if reactions structure is not as expected
  };

  return (
    <article className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 transition-all duration-300 hover:shadow-xl">
      {/* Image Section */}
      <div className="relative">
        <img
          src={`https://picsum.photos/seed/${post.id}/600/240`}
          alt={post.title}
          className="w-full h-60 object-cover"
        />
        
        {/* Tags Overlay */}
        <div className="absolute top-4 left-4 flex gap-2">
          {post.tags && post.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between h-[calc(580px-240px)]">
        <div>
          {/* Title and Read More Button */}
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-900 line-clamp-2">
              {post.title}
            </h2>
            <button 
              onClick={() => onReadMore(post)} 
              className="text-gray-500 hover:text-purple-600 transition-colors"
              aria-label="Read full article"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Post Excerpt */}
          <p className="text-gray-600 mb-4">
            {truncateText(post.body)}
          </p>
        </div>

        {/* Metadata and Author */}
        <div className="flex justify-between items-center">
          {/* Author Information */}
          <div className="flex items-center space-x-3">
            <img
              src={`https://i.pravatar.cc/40?u=${post.userId}`}
              alt={`User ${post.userId}`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">
                User {post.userId}
              </p>
            </div>
          </div>

          {/* Post Metrics (Views, Likes, Comments) */}
          <div className="flex items-center space-x-3 text-gray-500">
            <div className="flex items-center space-x-1">
              <Eye size={16} />
              <span className="text-xs">
                {formatViews(post.views || 0)}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <ThumbsUp size={16} />
              <span className="text-xs">
                {getLikes()}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageSquareMore size={16} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}