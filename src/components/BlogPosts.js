import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BlogContainer = styled.section`
  padding: 3rem 2rem;
  background-color: #f9f9f9;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const BlogExcerpt = styled.p`
  font-size: 1rem;
  color: #555;
`;

const BlogPosts = () => {
  const navigate = useNavigate();
  const posts = [
    {
      id: 1,
      title: 'Travel to the Mountains',
      excerpt: 'A journey to the best mountain spots.',
      path: '/mountain',
      image: 'mountain1.jpg', // Replace with actual image path
    },
    {
      id: 2,
      title: 'Productivity Hacks',
      path: 'https://www.simplilearn.com/best-productivity-hacks-to-get-more-done-article', // External link
      excerpt: 'Top tips to increase your daily output.',
      image: 'productivityhack.jpeg', // Replace with actual image path
    },
    {
      id: 3,
      title: 'Mindfulness Practices',
      path: 'https://www.mindful.org/meditation/mindfulness-getting-started/',
      excerpt: 'Simple techniques to enhance wellness.',
      image: 'mountain3.jpg', // Replace with actual image path
    },
  ];

  return (
    <BlogContainer>
      <h1><center>Recent Posts</center></h1>
      <BlogGrid>
        {posts.map(post => (
          <BlogCard key={post.id} onClick={() => {
            if (post.path.startsWith('http')) {
              window.open(post.path, '_blank'); // Open external link in a new tab
            } else {
              navigate(post.path); // Internal routing
            }
          }}>
            <BlogImage src={post.image} alt={post.title} />
            <BlogTitle>{post.title}</BlogTitle>
            <BlogExcerpt>{post.excerpt}</BlogExcerpt>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default BlogPosts;
