import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.h1`
  color: white;
  font-size: 2rem;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff6347;
  }
`;

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <NavbarContainer>
      <NavLogo>Lifestyle Blog</NavLogo>
      <NavItems>
        <li onClick={()=>navigate('/')}><NavLink href="#">Home</NavLink></li>
        <li onClick={()=>navigate('/about')}><NavLink href="#">About</NavLink></li>
        <li onClick={()=>navigate('/blog')}><NavLink href="#">Blog</NavLink></li>
        <li onClick={()=>navigate('/contact')}><NavLink href="#">Contact</NavLink></li>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
