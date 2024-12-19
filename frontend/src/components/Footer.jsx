import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #1f4037;
  color: #fff;
  padding: 1.5rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #99f2c8;
  font-size: 1.5rem;

  &:hover {
    color: #fff;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <SocialLinks>
        <SocialIcon href="https://github.com/yourusername" target="_blank">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com/in/yourusername" target="_blank">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://twitter.com/yourusername" target="_blank">
          <FaTwitter />
        </SocialIcon>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;
