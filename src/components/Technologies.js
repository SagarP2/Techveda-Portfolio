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
  padding: 0.75rem 2rem;
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
const TechGrid = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 1rem 0;
  position: relative;
  display: flex;
  justify-content: center;
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 2rem;
  justify-content: ${props => (props.shouldScroll ? 'flex-start' : 'center')};
  animation: ${props => props.shouldScroll ? 'scroll 20s linear infinite' : 'none'};
  width: fit-content;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    animation: ${props => props.shouldScroll ? 'scroll 30s linear infinite' : 'none'};
  }
`;

const TechCard = styled(motion.div)`
  flex: 0 0 auto;
  width: 160px;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 120px;
  }
`;


const TechLogo = styled(motion.img)`
  width: 60%;
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
  color: rgb(255, 255, 255);

  @media (max-width: 768px) {
    font-size: 0.8rem;
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
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <TechGrid>
                <CardRow shouldScroll={technologies[activeTab].length > 3}>
                  {technologies[activeTab].map((tech, index) => (
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
