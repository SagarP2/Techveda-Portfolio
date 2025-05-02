import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchTechnologies as fetchTechnologiesAPI } from '../api';
import LoadingSpinner from './LoadingSpinner';
const TechnologiesSection = styled(motion.section)`
  padding: 8rem 2rem;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 6rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--color-primary);
    border-radius: 2px;
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
  color: var(--color-text-light);
`;

const TabsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const Tab = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background: ${props => props.active ? 'rgba(66, 153, 225, 0.2)' : 'rgba(0, 0, 0, 0.8)'};
  color: ${props => props.active ? '#4299e1' : '#cbd5e0'};
  border: 1px solid ${props => props.active ? 'rgba(66, 153, 225, 0.3)' : 'rgba(66, 153, 225, 0.1)'};
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(66, 153, 225, 0.2);
    color: #4299e1;
    transform: translateY(-3px);
  }
`;

const TechGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1.5rem;
  }
`;

const BackgroundGlow = styled(motion.div)`
  position: absolute;
  width: 60vw;
  height: 60vw;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(var(--color-primary-rgb), 0.15) 0%,
    rgba(var(--color-primary-rgb), 0) 70%
  );
  z-index: -1;
  top: 10%;
  left: 10%;
  filter: blur(50px);
  opacity: 0.7;
`;

const TechCard = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: hsla(0, 2.60%, 7.60%, 0.80);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(66, 153, 225, 0.1);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  padding: 1rem;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

const TechLogo = styled(motion.img)`
  width: 50%;
  height: auto;
  margin-bottom: 0.75rem;
  object-fit: contain;
  
  @media (max-width: 768px) {
    width: 40%;
  }
`;

const TechName = styled(motion.h4)`
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  color:rgb(255, 255, 255);
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

// Animation variants
const containerVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { 
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const titleVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const descriptionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }
};

const tabsContainerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut", 
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    } 
  }
};

const tabVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hover: { y: -5, transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
};

const techGridVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      staggerChildren: 0.05
    } 
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.3,
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1
    }
  }
};

const techCardVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    transition: { 
      duration: 0.3,
      ease: "easeIn"
    }
  },
  hover: { 
    y: -10, 
    scale: 1.05,
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const logoVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
  hover: { 
    rotate: [0, -5, 5, -5, 0],
    transition: { 
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const nameVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.2 } }
};

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [technologies, setTechnologies] = useState({
    frontend: [],
    backend: [],
    database: [],
    design: [],
    devops: [],
    api: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'design', label: 'Design' },
    { id: 'devops', label: 'DevOps' },
    { id: 'api', label: 'API' }
  ];

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const fetchTechnologies = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetchTechnologiesAPI();
      console.log('Response data:', response.data);
      const selectedTechs = response.data.technologies.filter(tech => tech.isSelected);
      
      const categorizedTechs = {
        frontend: [],
        backend: [],
        database: [],
        design: [],
        devops: [],
        api: []
      };

      selectedTechs.forEach(tech => {
        if (categorizedTechs[tech.category]) {
          categorizedTechs[tech.category].push({
            name: tech.name,
            logo: tech.logo
          });
        }
      });

      setTechnologies(categorizedTechs);
    } catch (error) {
      console.error('Error fetching technologies:', error);
      console.error('Error response:', error.response);
      setError('Failed to load technologies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <TechnologiesSection
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      id="technologies"
    >
      <BackgroundGlow 
        animate={{ 
          x: [0, 50, -50, 0],
          y: [0, 30, -30, 0],
          scale: [1, 1.1, 0.9, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <Container>
        <SectionHeader>
          <SectionTitle variants={titleVariants}>
            Technologies & Platforms
          </SectionTitle>
          <SectionDescription variants={descriptionVariants}>
            At Techveda, we leverage cutting-edge technologies to build scalable, efficient, and innovative solutions for our clients. Our expertise spans across various domains of modern software development.
          </SectionDescription>
        </SectionHeader>
        
        <TabsContainer 
          variants={tabsContainerVariants}
          initial="initial"
          animate="animate"
        >
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              variants={tabVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {tab.label}
            </Tab>
          ))}
        </TabsContainer>
        

        
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            Loading technologies...
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-error)' }}>
            {error}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <TechGrid
              key={activeTab}
              variants={techGridVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {technologies[activeTab].length > 0 ? (
                technologies[activeTab].map((tech, index) => (
                  <TechCard
                    key={tech.name}
                    variants={techCardVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    <TechLogo 
                      src={tech.logo}
                      alt={tech.name}
                      variants={logoVariants}
                      layoutId={`tech-logo-${tech.name}`}
                    />
                    <TechName variants={nameVariants}>{tech.name}</TechName>
                  </TechCard>
                ))
              ) : (
                <div style={{ 
                  gridColumn: '1 / -1', 
                  textAlign: 'center', 
                  padding: '2rem',
                  color: 'var(--color-text-light)'
                }}>
                  No technologies selected for this category
                </div>
              )}
            </TechGrid>
          </AnimatePresence>
        )}
      </Container>
    </TechnologiesSection>
  );
};

export default Technologies; 