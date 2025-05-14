import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa';
import LoadingSpinner from '../components/LoadingSpinner';

// Create axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:5001/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

const PageContainer = styled.div`
  min-height: 100vh;
  position: relative;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background-color: var(--color-background);
  color: var(--color-text);

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 2rem;
  color: var(--color-heading);
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  height: 100%;
  min-height: 300px;

  @media (max-width: 768px) {
    min-height: 250px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Paragraph = styled(motion.p)`
  margin-bottom: 1.5rem;
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.7;
  color: var(--color-text-secondary);

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Highlight = styled.span`
  color: var(--color-primary);
  font-weight: 600;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.2rem;
  color: #ef4444;
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.5rem;
  }
`;

const SectionDivider = styled(motion.div)`
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-primary), transparent);
  margin: 4rem 0;
  opacity: 0.3;

  @media (max-width: 768px) {
    margin: 3rem 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 2rem;
  color: var(--color-heading);
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const SideImage = styled(motion.div)`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  height: 100%;
  min-height: 300px;

  @media (max-width: 768px) {
    min-height: 250px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const FounderSection = styled.div`
  margin-top: 4rem;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const FounderTitle = styled(SectionTitle)`
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const FounderCard = styled(motion.div)`
  display: grid;
  grid-template-columns: ${props => props.imagePosition === 'left' ? '250px 1fr' : '1fr 250px'};
  gap: 2rem;
  background: var(--color-background);
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;

const FounderImageSection = styled.div`
  order: ${props => props.imagePosition === 'right' ? 2 : 1};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const FounderImage = styled(motion.div)`
  width: 100%;
  height: 250px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const FounderInfo = styled.div`
  order: ${props => props.imagePosition === 'right' ? 1 : 2};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const FounderName = styled(motion.h3)`
  font-size: clamp(1.5rem, 3vw, 1.8rem);
  color: var(--color-heading);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
  }
`;

const FounderBio = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

const SocialLink = styled(motion.a)`
  color: var(--color-text);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  opacity: 0.8;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.4rem;
  }

  &:hover {
    color: var(--color-primary);
    opacity: 1;
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [foundersData, setFoundersData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch about data
        const aboutResponse = await api.get('/about').catch(err => {
          console.error('Error fetching about data:', err);
          return { data: null };
        });
        
        // Set default about data if API fails
        setAboutData(aboutResponse.data || {
          title: 'About Us',
          image: 'https://i.pinimg.com/736x/e0/5d/2f/e05d2f55b5a8803c0bb85a9c0ac8d040.jpg',
          paragraphs: [
            'At Techveda, we believe in the power of technology to transform businesses and enhance lives. Founded in 2020, our journey began with a simple mission: to create digital solutions that make a difference.',
            'We\'re a team of passionate designers, developers, and strategists who thrive on solving complex problems through innovative technology. With expertise spanning web development, mobile applications, UI/UX design, and digital marketing, we bring a comprehensive approach to every project.',
            'What sets us apart is our commitment to understanding your unique needs. We don\'t just build products; we craft experiences that align with your business goals and resonate with your audience. Our collaborative process ensures that your vision is at the heart of everything we create.',
            'From startups to established enterprises, we\'ve helped clients across industries elevate their digital presence and achieve measurable results. We\'re excited about the possibilities that technology brings and look forward to helping you navigate the ever-evolving digital landscape.'
          ]
        });

        // Try to fetch founders data, use default data if API fails
        try {
          const foundersResponse = await api.get('/founders');
          setFoundersData(foundersResponse.data);
        } catch (err) {
          console.log('Using default founders data');
          // Set default founders data
          setFoundersData({
            title: 'Meet Our Founders',
            founders: [
              {
                name: 'Priyanshu Patel',
                bio: 'Priyanshu Patel is the CEO of a collaborative tech platform TechVeda where passionate developers, designers, and innovators come together to showcase their work and build impactful digital solutions. With expertise in full-stack development, AI, and modern UI/UX, he leads with a vision to simplify workflows through cutting-edge technology. Known for his technical depth, clear communication, and leadership, Priyanshu is driven by a mission to turn ideas into scalable, real-world products.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                imagePosition: 'right',
                social: {
                  github: 'https://github.com/12princ',
                  portfolio: 'https://www.priyanshupatel.online/',
                  linkedin: 'https://linkedin.com',
                  instagram: 'https://www.instagram.com/__p12.5.__/'
                }
              },
              {
                name: 'Sagar Panchal',
                bio: 'Sagar Panchal is the Co-Founder and Chief Technology Officer, known for turning vision into reality. As the technical backbone of the team, Sagar takes charge of end-to-end project execution—managing workflows, guiding teams, and contributing directly to development. While Priyanshu sets the direction, Sagar ensures every technical element aligns perfectly and delivers results. A close friend and trusted collaborator, Sagar’s disciplined approach, technical precision, and leadership make him a driving force behind the platform’s success.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                imagePosition: 'left',
                social: {
                  github: 'https://github.com/SagarP2',
                  portfolio: 'https://sagarp2.github.io/SagarPanchal/',
                  linkedin: 'https://linkedin.com',
                  instagram: 'https://www.instagram.com/_sagarpanchal._/'
                }
              }
            ]
          });
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message || 'Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to render paragraphs with highlights
  const renderParagraphs = (paragraphs, highlights) => {
    if (!paragraphs) {
      return null;
    }

    return paragraphs.map((paragraph, index) => {
      // Check if there are any highlights for this paragraph
      const paragraphHighlights = highlights?.filter(h => h.paragraphIndex === index) || [];
      
      if (paragraphHighlights.length === 0) {
        // No highlights, just render the paragraph
        return (
          <Paragraph key={index}>
            {paragraph}
          </Paragraph>
        );
      }
      
      // There are highlights, need to split the paragraph and insert highlights
      let paragraphText = paragraph;
      const parts = [];
      let lastIndex = 0;
      
      // Sort highlights by their position in the text
      const sortedHighlights = [...paragraphHighlights].sort((a, b) => {
        const aIndex = paragraphText.indexOf(a.text);
        const bIndex = paragraphText.indexOf(b.text);
        return aIndex - bIndex;
      });
      
      // Process each highlight
      for (const highlight of sortedHighlights) {
        const highlightIndex = paragraphText.indexOf(highlight.text, lastIndex);
        
        if (highlightIndex === -1) {
          continue;
        }
        
        // Add text before the highlight
        if (highlightIndex > lastIndex) {
          parts.push(paragraphText.substring(lastIndex, highlightIndex));
        }
        
        // Add the highlighted text
        parts.push(
          <Highlight key={`highlight-${index}-${highlightIndex}`}>
            {highlight.text}
          </Highlight>
        );
        
        lastIndex = highlightIndex + highlight.text.length;
      }
      
      // Add any remaining text
      if (lastIndex < paragraphText.length) {
        parts.push(paragraphText.substring(lastIndex));
      }
      
      return (
        <Paragraph key={index}>
          {parts}
        </Paragraph>
      );
    });
  };

  if (loading) {
    return (
      <PageContainer>
        <ContentContainer>
          <LoadingSpinner />
        </ContentContainer>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <ContentContainer>
          <ErrorContainer>{error}</ErrorContainer>
        </ContentContainer>
      </PageContainer>
    );
  }

  if (!aboutData) {
    return (
      <PageContainer>
        <ContentContainer>
          <ErrorContainer>No about content available.</ErrorContainer>
        </ContentContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <ContentContainer>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {aboutData.title || 'About Us'}
        </Title>
        <Grid>
          <ImageContainer
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src={aboutData.image || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} 
              alt="About Techveda" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
              }}
            />
          </ImageContainer>
          <ContentSection>
            {renderParagraphs(aboutData.paragraphs, aboutData.highlights)}
          </ContentSection>
        </Grid>

        {aboutData.additionalParagraphs && aboutData.additionalParagraphs.length > 0 && (
          <>
            <SectionDivider
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Our Story
            </SectionTitle>
            <ContentGrid>
              <ContentSection>
                {renderParagraphs(aboutData.additionalParagraphs, aboutData.additionalHighlights)}
              </ContentSection>
              <SideImage
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <img 
                  src={aboutData.sideImage || aboutData.image || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} 
                  alt="About Techveda Side" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                  }}
                />
              </SideImage>
            </ContentGrid>
          </>
        )}

        {foundersData && foundersData.founders && foundersData.founders.length > 0 && (
          <FounderSection>
            <SectionDivider
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            />
            <FounderTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {foundersData.title || 'Meet Our Founders'}
            </FounderTitle>
            {foundersData.founders.map((founder, index) => (
              <FounderCard 
                key={index} 
                imagePosition={founder.imagePosition || 'left'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
              >
                <FounderImageSection imagePosition={founder.imagePosition || 'left'}>
                  <FounderImage
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                  >
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/250";
                      }}
                    />
                  </FounderImage>
                  <SocialLinks
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 + (index * 0.1) }}
                  >
                    {founder.social?.github && (
                      <SocialLink 
                        href={founder.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub />
                      </SocialLink>
                    )}
                    {founder.social?.portfolio && (
                      <SocialLink 
                        href={founder.social.portfolio} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Portfolio Website"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGlobe />
                      </SocialLink>
                    )}
                    {founder.social?.linkedin && (
                      <SocialLink 
                        href={founder.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaLinkedin />
                      </SocialLink>
                    )}
                    {founder.social?.instagram && (
                      <SocialLink 
                        href={founder.social.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Instagram Profile"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaInstagram />
                      </SocialLink>
                    )}
                  </SocialLinks>
                </FounderImageSection>
                <FounderInfo imagePosition={founder.imagePosition || 'left'}>
                  <FounderName
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                  >
                    {founder.name}
                  </FounderName>
                  <FounderBio
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 + (index * 0.1) }}
                  >
                    {founder.bio}
                  </FounderBio>
                </FounderInfo>
              </FounderCard>
            ))}
          </FounderSection>
        )}
      </ContentContainer>
    </PageContainer>
  );
};

export default About; 