import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #e8f0f8, #f4f9ff);
  color: #333;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #1f4037;
  margin-bottom: 1.5rem;
`;

const Content = styled.div`
  max-width: 700px;
  margin-bottom: 3rem;
  line-height: 1.8;
  font-size: 1.1rem;
  color: #555;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled(motion.img)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
`;

function About() {
  return (
    <AboutSection
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Heading>About Me</Heading>
      <Content>
        <Paragraph>
          I’m a full-stack developer with a passion for designing clean, functional, and intuitive web applications. 
          Over the years, I’ve developed a knack for blending technical skill with creativity, resulting in projects 
          that are both visually engaging and highly responsive.
        </Paragraph>
        <Paragraph>
          From JavaScript and React on the frontend to Node.js and MongoDB on the backend, I enjoy working across 
          the full stack. I’m constantly learning new technologies and techniques to improve my skillset and deliver 
          cutting-edge solutions to complex problems.
        </Paragraph>
      </Content>
      <ImageWrapper>
        <ProfileImage
          src="profile.jpg"
          alt="Your Name"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </ImageWrapper>
    </AboutSection>
  );
}

export default About;
