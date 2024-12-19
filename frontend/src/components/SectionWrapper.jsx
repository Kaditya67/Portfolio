import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.section)`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

function SectionWrapper({ children, ...rest }) {
  return (
    <Wrapper
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...rest}
    >
      {children}
    </Wrapper>
  );
}

export default SectionWrapper;
