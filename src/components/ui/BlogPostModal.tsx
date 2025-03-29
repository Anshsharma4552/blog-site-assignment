import React from 'react';
import { X } from 'lucide-react';

export function BlogPostModal({ 
  isOpen, 
  onClose, 
  post 
}) {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative z-50 w-full max-w-2xl m-4 max-h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{post.title}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[70vh] p-6">
          <img
            src={`https://picsum.photos/seed/${post.id}/1200/600`}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <img
                src={`https://i.pravatar.cc/60?u=${post.userId}`}
                alt={`User ${post.userId}`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">User {post.userId}</p>
                <p className="text-xs text-gray-500">
                  Published on {new Date(post.date || Date.now()).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {post.tags && post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">{post.body}</p>
            {post.additionalContent && (
              <div className="mt-6">
                {post.additionalContent.map((section, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                    <p className="text-gray-600">{section.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="p-6 border-t flex justify-end space-x-4">
          <button 
            onClick={onClose} 
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
          >
            Close
          </button>
          <button 
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Share Post
          </button>
        </div>
      </div>
    </div>
  );
}