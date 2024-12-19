import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #1f4037, #99f2c8);
  color: #fff;
  text-align: center;
  padding: 0 2rem;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

const CTAButton = styled(motion.a)`
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  background: #fff;
  color: #1f4037;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #99f2c8;
  }
`;

function Home() {
  return (
    <HomeSection
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Name>Hello, I'm Aditya</Name>
      <Tagline>Full-Stack Developer </Tagline>
      <CTAButton
        href="#about"
        whileHover={{ scale: 1.1 }}
      >
        Learn More
      </CTAButton>
    </HomeSection>
  );
}

export default Home;
