import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import CallToAction from '../components/CallToAction';
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0rem;
  padding-bottom: 6rem;
`;


const Emphasis = styled.span`
  background: linear-gradient(90deg, #4299e1, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    opacity: 0;
    transform: scaleX(0.7);
    transition: all 0.3s ease;
  }  
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    color: ${props => props.theme.colors.text};
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: rem;
  padding-bottom: 8rem;
`;

const ProjectCard = styled(motion.div)`
 background: #0a0a0a;
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(66, 153, 225, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  isolation: isolate;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 40px rgba(66, 153, 225, 0.1);
    border-color: rgba(66, 153, 225, 0.2);
  }
`;


const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  color:linear-gradient(135deg, #4299e1, #38b2ac);
  font-size: 1.75rem;
  margin-bottom: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    color: #4299e1;
  }
`;

const ProjectDescription = styled.p`
  color: #cbd5e0;
  font-size: 1.1rem;
  margin-bottom: 1.75rem;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 5.1rem;
  transition: color 0.3s ease;
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  
  & > .scroll-track {
    display: inline-flex;
    white-space: nowrap;
    animation: scroll 15s linear infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const Technology = styled.span`
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right:10px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ViewDetailsButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.8rem;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 0.3rem;
  font-weight: 500;
  transition: background 0.2s ease;
  margin-left:auto;

  &:hover {
    background: #2563eb;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const GitHubLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;

  svg {
    width: 30px;
    height: 30px;
  }
  span{
    padding-left:10px;
  }

  &:hover {
    color: #3b82f6;
  }
`;

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setError('Failed to fetch projects');
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div className="error-message">{error}</div>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <h1>All <Emphasis>Projects</Emphasis></h1>
        <p>Explore our portfolio of innovative and impactful projects</p>
      </Header>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectImage src={project.mainimage} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.shortDescription}</ProjectDescription>
              <TechnologiesContainer>
                <div className="scroll-track">
                  {[...project.technologies, ...project.technologies].map((tech, index) => (
                    <Technology key={index}>{tech}</Technology>
                  ))}
                </div>
              </TechnologiesContainer>

              <ProjectLinks>
                <GitHubLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg><span>GitHub</span>

                </GitHubLink>
                <ViewDetailsButton to={`/projects/${project._id}`}>
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </ViewDetailsButton>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
      <CallToAction />
    </Container>


  );
};

export default ProjectsList; 