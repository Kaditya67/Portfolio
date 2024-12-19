import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';

const SkillsSection = styled(motion.section)`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #1f4037;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
  color: #1f4037;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1) rotate(10deg);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`;

const SkillName = styled.p`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  color: #555;
`;

const skills = [
  { icon: <FaReact />, name: 'React' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaDatabase />, name: 'MongoDB' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
];

function Skills() {
  return (
    <SkillsSection
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Heading>Skills</Heading>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1, // Stagger animation for each skill
              duration: 0.5,
            }}
          >
            {skill.icon}
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;
