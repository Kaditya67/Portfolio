import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #1f4037;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #99f2c8;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavLink to="home" smooth duration={500}>Home</NavLink>
      <NavLink to="about" smooth duration={500}>About</NavLink>
      <NavLink to="skills" smooth duration={500}>Skills</NavLink>
      <NavLink to="projects" smooth duration={500}>Projects</NavLink>
      <NavLink to="contact" smooth duration={500}>Contact</NavLink>
    </NavbarContainer>
  );
}

export default Navbar;
