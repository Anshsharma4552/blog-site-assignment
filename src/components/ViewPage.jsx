import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewPage = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/posts')
            setBlogs(response.data.posts)
            setLoading(false)
        } catch (error) {
            console.error("Error fetching blogs:", error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map(item => (
                    <div 
                        key={item.id} 
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
                    >
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h2>
                            
                            <p className="text-gray-600 mb-4 line-clamp-3">{item.body}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {item.tags.map((tag, index) => (
                                    <span 
                                        key={index} 
                                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs uppercase tracking-wider"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4 mt-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.33 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                        </svg>
                                        <span>{item.reactions.likes}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.333v-5.43a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0011.057 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.64 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4L13.2 12.067a4 4 0 00.8-2.4z" />
                                        </svg>
                                        <span>{item.reactions.dislikes}</span>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    <span>{item.views}</span>
                                </div>
                            </div>
                            
                            <div className="mt-4 text-sm text-gray-500 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                <span>User ID: {item.userId}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ViewPage