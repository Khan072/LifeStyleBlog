import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
  color: #333;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const AboutContent = styled.div`
  text-align: center;
  max-width: 700px;
`;

const Heading = styled.h2`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #f1f1f1;
  margin-bottom: 2rem;
`;

const Button = styled.a`
  background-color: #ff6f61;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #ff8e7f;
  }
`;

const About = () => {
    const navigate=useNavigate();
  return (
    <AboutContainer>
      <Image src="/aboutme.jpg" alt="Your Name" />
      <AboutContent>
        <Heading>Hello, I'm Aabid!</Heading>
        <Paragraph>
          I'm a third-year engineering student with a deep passion for adventure and travel. 
          Whether it's hiking through the mountains or discovering new places, I thrive on 
          exploring the world around me. My curiosity doesn't stop there—I am constantly learning 
          new skills, especially when it comes to technology and personal development.
        </Paragraph>
        <Paragraph>
          Besides my love for adventure, I'm also a sports enthusiast. You'll often find me playing 
          football or cricket, where I enjoy the thrill of competition and teamwork. 
          I love meeting new people, sharing stories, and creating meaningful connections that 
          enrich my life and broaden my perspective.
        </Paragraph>
        <Button onClick={()=>navigate('/contact')}>Let's Connect</Button>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
