import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding-top: 2rem;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 1.5rem;
  }

  @media (max-width: 480px) {
  
     padding: 1.5rem 1.5rem 3rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${props => props.theme.spacing.lg};
  }

  @media (max-width: 768px) {
    padding: 0 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const ContentWrapper = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const SectionHeading = styled(motion.h2)`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.md};
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    margin-bottom: ${props => props.theme.spacing.sm};
  }
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 80px;
    height: 4px;
    background: var(--color-primary);
    transition: width 0.3s ease;
    
    @media (max-width: 992px) {
      left: 50%;
      transform: translateX(-50%);
    }

    @media (max-width: 480px) {
      width: 60px;
      height: 3px;
      bottom: -8px;
    }
  }
`;

const Emphasis = styled.span`
  color: var(--color-primary);
  font-weight: 600;
`;

const Description = styled(motion.p)`
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.8;
  color: var(--color-gray);

  @media (max-width: 768px) {
    margin-bottom: ${props => props.theme.spacing.sm};
  }
`;

const Stats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.md};
  margin: ${props => props.theme.spacing.lg} 0;
  
  @media (max-width: 992px) {
    max-width: 500px;
    margin: ${props => props.theme.spacing.lg} auto;
  }

  @media (max-width: 768px) {
    gap: ${props => props.theme.spacing.sm};
    margin: ${props => props.theme.spacing.md} auto;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.xs};
  }
`;

const StatItem = styled.div`
  padding: ${props => props.theme.spacing.md};
  background: hsla(0, 2.60%, 7.60%, 0.80);
  border: 1px solid rgba(66, 153, 225, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    padding: ${props => props.theme.spacing.sm};
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(66, 153, 225, 0.1);
    border-color: rgba(66, 153, 225, 0.2);
  }
`;

const StatNumber = styled.h3`
  font-size: clamp(1.8rem, 2.5vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 5px;
  color: #4299e1;

  @media (max-width: 768px) {
    margin-bottom: 3px;
  }
`;

const StatTitle = styled.p`
  font-size: clamp(0.8rem, 1.2vw, 1rem);
  font-weight: 500;
`;

const SkillsContainer = styled.div`
  margin-top: ${props => props.theme.spacing.lg};
`;

const SkillsTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: ${props => props.theme.spacing.sm};
  font-weight: 600;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SkillTag = styled(motion.span)`
  padding: 8px 16px;
  background: hsla(0, 2.60%, 7.60%, 0.80);
  color: #4299e1;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(66, 153, 225, 0.2);
    color: #4299e1;
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.1);
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
    max-width: 400px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    max-width: 350px;
  }

  @media (max-width: 480px) {
    max-width: 280px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
      padding-bottom: 21%;

  border-radius: 0px;
  box-shadow: ${props => props.theme.shadows.medium};
  filter: brightness(0.9);

  @media (max-width: 768px) {
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    border-radius: 12px;
  }
`;

const ExperienceBox = styled(motion.div)`
  position: absolute;
  bottom: -10px;
  left: -25px;
  background: #4299e1;
  padding: ${props => props.theme.spacing.md};
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(66, 153, 225, 0.1);
  border: 1px solid rgba(66, 153, 225, 0.1);
  
  @media (max-width: 992px) {
    left: 0;
  }

  @media (max-width: 768px) {
    bottom: -20px;
    padding: ${props => props.theme.spacing.sm};
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    bottom: -15px;
    padding: ${props => props.theme.spacing.xs};
    border-radius: 8px;
  }
`;

const ExperienceNumber = styled.h3`
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 700;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    margin-bottom: 3px;
  }
`;

const ExperienceText = styled.p`
  font-size: clamp(0.75rem, 1.1vw, 0.9rem);
  font-weight: 500;
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: -200px;
  left: -200px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(66, 153, 225, 0.1);
  opacity: 0.05;
  z-index: -1;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    top: -150px;
    left: -150px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
    top: -100px;
    left: -100px;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
    
      <Container>
        <ContentWrapper>
          <SectionHeading
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About <Emphasis>Techveda</Emphasis>
          </SectionHeading>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Techveda is a dynamic duo of passionate developers dedicated to creating cutting-edge web applications and innovative digital solutions for businesses across various industries.
          </Description>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Founded by Rahul Sharma and Priya Patel, our team combines frontend expertise with backend mastery to deliver complete solutions that are reliable, scalable, and user-friendly.
          </Description>
          
          <Stats
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <StatItem>
              <StatNumber>4+</StatNumber>
              <StatTitle>Years Experience</StatTitle>
            </StatItem>
            <StatItem>
              <StatNumber>25+</StatNumber>
              <StatTitle>Projects Completed</StatTitle>
            </StatItem>
            <StatItem>
              <StatNumber>15+</StatNumber>
              <StatTitle>Happy Clients</StatTitle>
            </StatItem>
            <StatItem>
              <StatNumber>5+</StatNumber>
              <StatTitle>Tech Stacks</StatTitle>
            </StatItem>
          </Stats>
          
         
        </ContentWrapper>
        
        <ImageWrapper
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ProfileImage 
            src="https://www.appgenixinfotech.com/wp-content/uploads/2022/04/Group.png" 
            alt="Techveda Team" 
          />
          <ExperienceBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ExperienceNumber>4+</ExperienceNumber>
            <ExperienceText>Years of Excellence</ExperienceText>
          </ExperienceBox>
        </ImageWrapper>
      </Container>
    </AboutSection>
  );
};

export default About; 