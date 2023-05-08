import React from 'react';

function BlogPost({ post }) {
  const truncatedTitle = post.title.length > 15 ? post.title.substring(0, 15) + '...' : post.title;
  const truncatedText = post.body.length > 50 ? post.body.substring(0, 50) + '...' : post.body;

  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100">
        <img className="card-img-top" src={post.imageUrl} alt="Blog post" />
        <div className="card-body">
          <h2 className="card-title">{truncatedTitle}</h2>
          <p className="card-text">{truncatedText}</p>
        </div>
        <div className="card-footer">
          <a href="https://www.naijazone.co/category/Music" className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
