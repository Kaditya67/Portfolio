import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #1f4037;
`;

const ProjectDescription = styled.p`
  color: #555;
`;

function ProjectCard({ title, description, link }) {
  return (
    <Card whileHover={{ scale: 1.05 }}>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <Button as="a" href={link} target="_blank" bg="#1f4037" color="#fff" hoverBg="#99f2c8">
        View Project
      </Button>
    </Card>
  );
}

export default ProjectCard;
