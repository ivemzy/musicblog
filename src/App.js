import React, { useState, useEffect } from 'react';
import BlogPost from './components/Blogpost'
import Header from './components/Header'

function App() {
  const [posts, setPosts] = useState([]);
  const [numPosts, setNumPosts] = useState(18);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const postsWithImages = data.map(post => ({
          ...post,
          imageUrl: `https://picsum.photos/400/200?random=${post.id}`
        }));
        setPosts(postsWithImages);
      });
  }, []);

  const visiblePosts = posts.slice(0, numPosts);

  return (
    <div>
      <Header />
      <div className='m-3 p-3'></div>
      <div className='m-3 p-3'></div>
      <div className="container">
        <div className="row">
          {visiblePosts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
        {numPosts < posts.length && (
          <div className="text-center">
            <button className="btn btn-primary" onClick={() => setNumPosts(numPosts + 18)}>Load More</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
