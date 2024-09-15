import React from 'react';
import styled from 'styled-components';

// Styled component for the video background
const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  top: 0;
  left: 0;
`;

const HeroContainer = styled.section`
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroContent = styled.div`
  color: white;
  padding: 0 1rem;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      {/* Video Background */}
      <VideoBackground autoPlay muted loop>
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      {/* Content over the video */}
      <HeroContent>
        <HeroTitle>Welcome to My Lifestyle Blog</HeroTitle>
        <HeroSubtitle>Discover tips on travel, wellness, and productivity.</HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
