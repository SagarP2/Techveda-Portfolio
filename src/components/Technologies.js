import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchTechnologies as fetchTechnologiesAPI } from '../api';

const TechnologiesSection = styled(motion.section)`
  padding: 5rem 2rem;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  position: relative;

  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
  }

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

    @media (max-width: 480px) {
      width: 60px;
      height: 3px;
    }
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
  color: var(--color-text-light);
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const TabsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Tab = styled(motion.button)`
  padding: 0.75rem 2rem;
  background: ${props => props.active ? 'rgba(66, 153, 225, 0.2)' : 'rgba(0, 0, 0, 0.8)'};
  color: ${props => props.active ? '#4299e1' : '#cbd5e0'};
  border: 1px solid ${props => props.active ? 'rgba(66, 153, 225, 0.3)' : 'rgba(66, 153, 225, 0.1)'};
  border-radius: 30px;
  font-size: clamp(0.8rem, 2vw, 1rem);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1.2rem;
  }

  &:hover {
    background: rgba(66, 153, 225, 0.2);
    color: #4299e1;
    transform: translateY(-3px);
  }
`;

const TechGrid = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 1rem 0;
  position: relative;
  display: flex;
  justify-content: ${props => (props.shouldScroll ? 'flex-start' : 'start')};
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 2rem;
  justify-content: ${props => (props.shouldScroll ? 'flex-start' : 'start')};
  animation: ${props => props.shouldScroll ? 'scroll 20s linear infinite' : 'none'};
  width: fit-content;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
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

const TechCard = styled(motion.div)`
  flex: 0 0 auto;
  width: clamp(120px, 15vw, 160px);
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: clamp(100px, 12vw, 120px);
  }

  @media (max-width: 480px) {
    width: clamp(80px, 10vw, 100px);
  }
`;

const TechLogo = styled(motion.img)`
  width: 60%;
  height: auto;
  margin-bottom: 0.75rem;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 50%;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    width: 45%;
    margin-bottom: 0.4rem;
  }
`;

const TechName = styled(motion.h4)`
  font-size: clamp(0.7rem, 1.5vw, 0.9rem);
  font-weight: 500;
  text-align: center;
  color: rgb(255, 255, 255);

  @media (max-width: 768px) {
    font-size: clamp(0.6rem, 1.2vw, 0.8rem);
  }
`;

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [technologies, setTechnologies] = useState({
    frontend: [],
    backend: [],
    database: [],
    design: [],
    devops: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'design', label: 'Design' },
    { id: 'devops', label: 'DevOps' }
  ];

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchTechnologiesAPI();
        const selectedTechs = response.data.technologies.filter(tech => tech.isSelected);

        const categorized = {
          frontend: [],
          backend: [],
          database: [],
          design: [],
          devops: []
        };

        selectedTechs.forEach(tech => {
          if (categorized[tech.category]) {
            categorized[tech.category].push({ name: tech.name, logo: tech.logo });
          }
        });

        setTechnologies(categorized);
      } catch (err) {
        setError('Failed to load technologies. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  return (
    <TechnologiesSection id="technologies">
      <Container>
        <SectionHeader>
          <SectionTitle>Technologies & Platforms</SectionTitle>
          <SectionDescription>
            At Techveda, we leverage cutting-edge technologies to build scalable, efficient, and innovative solutions for our clients.
          </SectionDescription>
        </SectionHeader>

        <TabsContainer>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Tab>
          ))}
        </TabsContainer>

        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>Loading technologies...</div>
        ) : error ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-error)' }}>{error}</div>
        ) : (
          <AnimatePresence mode="wait">
            <div style={{ display: 'flex', justifyContent: 'center', width: 'fitcontent' }}>
              <TechGrid>
                <CardRow shouldScroll={technologies[activeTab].length > 4}>
                  {[...technologies[activeTab], ...(technologies[activeTab].length > 4 ? technologies[activeTab] : [])]
                    .map((tech, index) => (
                      <TechCard key={`${tech.name}-${index}`}>
                        <TechLogo src={tech.logo} alt={tech.name} />
                        <TechName>{tech.name}</TechName>
                      </TechCard>
                    ))}
                </CardRow>
              </TechGrid>
            </div>
          </AnimatePresence>
        )}
      </Container>
    </TechnologiesSection>
  );
};

export default Technologies;
