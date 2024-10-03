import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  if (error) return <p>Error loading posts: {error.message}</p>;

  return (
    <div className='w-full'>
      <h1 className="text-yellow-600"> Posts</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {posts.map(post => (
      <li key={post.id} className="border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">{post.title.rendered}</h2>
        <div className="mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
        <a href={post.link} className="text-yellow-500 hover:underline">Read more</a>
      </li>
    ))}
  </ul>
    </div>
  );
};

export default Blog;
