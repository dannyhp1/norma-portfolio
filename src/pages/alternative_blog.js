import React from 'react';

const Blog = () => {
  const isBrowser = typeof window !== `undefined`;

  if (isBrowser) {
    window.location.assign('https://blog.normavazquez.com');
  }

  return <div>Redirecting...</div>;
};

export default Blog;
