import styled from 'styled-components';
import { motion } from 'framer-motion';

const Heading = styled(motion.h2)`
  font-size: 2.5rem;
  color: #1f4037;
  text-align: center;
  margin-bottom: 2rem;
`;

function SectionHeading({ children }) {
  return (
    <Heading
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </Heading>
  );
}

export default SectionHeading;
