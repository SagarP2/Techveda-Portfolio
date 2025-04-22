import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import SectionHeading from "./SectionHeading";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const ProjectsSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(180deg, #0a0a0a 0%, #111111 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(66, 153, 225, 0.3), transparent);
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(circle at 50% 50%, rgba(66, 153, 225, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom right,
      transparent,
      rgba(66, 153, 225, 0.1)
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 40px rgba(66, 153, 225, 0.2);
    border-color: rgba(66, 153, 225, 0.3);

    &::before {
      opacity: 1;
    }
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 240px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${ProjectCard}:hover &::after {
    opacity: 1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  ${ProjectCard}:hover & {
    transform: scale(1.08);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(66, 153, 225, 0.2), transparent);
  }
`;

const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  font-weight: 600;
  background: linear-gradient(90deg, #ffffff, #4299e1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    background: linear-gradient(90deg, #4299e1, #2563eb);
    -webkit-background-clip: text;
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

  ${ProjectCard}:hover & {
    color: #e2e8f0;
  }
`;

const TechStack = styled.div`
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



`;

const TechBadge = styled(motion.span)`
  background: rgba(66, 153, 225, 0.15);
  color: #4299e1;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  cursor: default;

  &:hover {
    background: rgba(66, 153, 225, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.2);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.25rem;
  opacity: 0.9;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #4299e1;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  background: rgba(66, 153, 225, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(66, 153, 225, 0.2);
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.2);

    &::before {
      transform: translate(-50%, -50%) scale(2);
    }
  }

  svg {
    width: 22px;
    height: 22px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;



const ViewMoreSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const ViewMoreButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  background: linear-gradient(90deg, #4299e1, #2563eb);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(66, 153, 225, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent 50%);
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(66, 153, 225, 0.4);

    &::before {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
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

const ViewDetailsButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #4299e1 0%, #2563eb 100%);
  color: #ffffff;
  text-decoration: none;
  font-size: 0.95rem;
  padding: 0.75rem 5.1rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(66, 153, 225, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(66, 153, 225, 0.25);

    &::before {
      opacity: 1;
    }

    svg {
      transform: translateX(3px);
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.2);
  }

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }
`;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const techBadgeVariants = {
  hover: {
    y: -2,
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        const sortedProjects = response.data
          .sort((a, b) => new Date(b._id) - new Date(a._id))
          .slice(0, 3);
        setProjects(sortedProjects);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectsSection>
      <Container>
        <SectionHeading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Latest <Emphasis>Projects</Emphasis>
        </SectionHeading>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <ProjectsGrid
              as={motion.div}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {projects.map((project) => (
                <ProjectCard key={project._id} variants={item}>
                  <ProjectImageWrapper>
                    <ProjectImage src={project.mainimage} alt={project.title} />
                  </ProjectImageWrapper>
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.shortDescription}</ProjectDescription>
                    <TechStack>
                      {project.technologies.map((tech, index) => (
                        <TechBadge key={index} variants={techBadgeVariants}>
                          {tech}
                        </TechBadge>
                      ))}
                    </TechStack>
                    <ViewDetailsButton to={`/projects/${project._id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Details
                    </ViewDetailsButton>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
            <ViewMoreSection>
              <ViewMoreButton to="/projects">
                View More Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </ViewMoreButton>
            </ViewMoreSection>
          </>
        )}
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
