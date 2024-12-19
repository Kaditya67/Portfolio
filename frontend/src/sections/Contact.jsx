import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled(motion.section)`
  padding: 4rem 2rem;
  background: #1f4037;
  color: #fff;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const FormField = styled.input`
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  background: #99f2c8;
  color: #1f4037;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Contact() {
  return (
    <ContactSection id="contact" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2>Contact Me</h2>
      <ContactForm>
        <FormField type="text" placeholder="Your Name" required />
        <FormField type="email" placeholder="Your Email" required />
        <FormField as="textarea" placeholder="Your Message" rows="4" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
}

export default Contact;
