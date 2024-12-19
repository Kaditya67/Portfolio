import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  background: ${(props) => props.bg || "#99f2c8"};
  color: ${(props) => props.color || "#1f4037"};
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.hoverBg || "#1f4037"};
    color: ${(props) => props.hoverColor || "#99f2c8"};
  }
`;

function Button({ children, bg, color, hoverBg, hoverColor, ...rest }) {
  return (
    <StyledButton
      whileHover={{ scale: 1.05 }}
      bg={bg}
      color={color}
      hoverBg={hoverBg}
      hoverColor={hoverColor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
