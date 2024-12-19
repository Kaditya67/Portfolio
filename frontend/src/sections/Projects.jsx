import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Tab Container and Style
const ProjectsSection = styled(motion.section)`
  padding: 4rem 2rem;
  background: #f0f4f8;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #1f4037;
  margin-bottom: 2rem;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

const Tab = styled.div`
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: ${props => (props.active ? '#1f4037' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#1f4037')};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: #99f2c8;
    color: #fff;
  }
`;

// Tab Content Style
const TabContent = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

  h3 {
    font-size: 1.8rem;
    color: #1f4037;
  }

  p {
    color: #555;
    margin: 1rem 0;
  }

  a {
    color: #1f4037;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #99f2c8;
  }
`;

const projects = [
  {
    title: "Project One",
    description: "An innovative web application that helps users organize tasks efficiently.",
    link: "https://link-to-project1.com",
  },
  {
    title: "Project Two",
    description: "A mobile-responsive website for a local restaurant, featuring an online menu and booking.",
    link: "https://link-to-project2.com",
  },
  {
    title: "Project Three",
    description: "An e-commerce platform allowing users to browse and purchase items seamlessly.",
    link: "https://link-to-project3.com",
  },
  {
    title: "Project Four",
    description: "A data visualization tool that provides insights into social media trends.",
    link: "https://link-to-project4.com",
  },
  {
    title: "Project Five",
    description: "A blog platform that allows users to create, edit, and share articles easily.",
    link: "https://link-to-project5.com",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <ProjectsSection id="projects">
      <Heading>Projects</Heading>

      {/* Tabs Navigation */}
      <Tabs>
        {projects.map((project, index) => (
          <Tab
            key={index}
            active={selectedProject === index}
            onClick={() => setSelectedProject(index)}
          >
            {project.title}
          </Tab>
        ))}
      </Tabs>

      {/* Tab Content */}
      {projects.map((project, index) => (
        <TabContent key={index} active={selectedProject === index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </TabContent>
      ))}
    </ProjectsSection>
  );
}

export default Projects;
