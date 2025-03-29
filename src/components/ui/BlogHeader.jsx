import React from 'react';
import { SearchInput } from "./SearchInput";
import { useBlogContext } from '../../context/BlogProvider'; 

export function BlogHeader() {
  const { handleSearch } = useBlogContext(); 

  return (
    <header className="relative bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1.5 rounded-full">
              Our blog
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Resources and Insights
          </h1>
          
          <p className="text-lg md:text-xl text-purple-600 max-w-2xl mx-auto">
            Discover the latest industry news, expert interviews, cutting-edge technologies, and valuable resources.
          </p>
          
          <div className="max-w-xl mx-auto pt-4">
            <SearchInput onSearch={handleSearch} />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-50">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 462" 
            className="w-full h-auto"
          >
            <path 
              d="M0 0h1440v462c-480-100-960-50-1440 0V0Z" 
              fill="#F9F5FF" 
              className="fill-purple-50/50"
            />
            <path 
              d="M840 183.787L1520 98.444v71.111L840 254.898v-71.111Z" 
              fill="#E9D7FE" 
              className="fill-purple-200/50"
            />
            <path 
              d="M1017.78 90.352L1484.44 32v71.111l-466.66 58.352v-71.111Z" 
              fill="#D6BBFB" 
              className="fill-purple-300/50"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}