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
  padding: 4rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background-color: var(--color-background);
  color: var(--color-text);
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--color-heading);
  font-weight: 700;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
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
`;

// New styled components for the additional section
const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-primary), transparent);
  margin: 4rem 0;
  opacity: 0.3;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-heading);
  font-weight: 700;
  text-align: center;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const SideImage = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  height: 100%;
  min-height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FounderSection = styled.div`
  margin-top: 4rem;
  width: 100%;
`;

const FounderTitle = styled(SectionTitle)`
  margin-top: 2rem;
`;

const FounderCard = styled.div`
  display: grid;
  grid-template-columns: ${props => props.imagePosition === 'left' ? '250px 1fr' : '1fr 250px'};
  gap: 2rem;

  padding: 2rem 0;
  background: var(--color-background);
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
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

const FounderImage = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

const FounderName = styled.h3`
  font-size: 1.8rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
`;

const FounderBio = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: var(--color-text);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  opacity: 0.8;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  
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
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          paragraphs: [
            'At Techveda, we believe in the power of technology to transform businesses and enhance lives. Founded in 2020, our journey began with a simple mission: to create digital solutions that make a difference.',
            'We\'re a team of passionate designers, developers, and strategists who thrive on solving complex problems through innovative technology. With expertise spanning web development, mobile applications, UI/UX design, and digital marketing, we bring a comprehensive approach to every project.',
            'What sets us apart is our commitment to understanding your unique needs. We don\'t just build products; we craft experiences that align with your business goals and resonate with your audience. Our collaborative process ensures that your vision is at the heart of everything we create.'
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
                name: 'John Smith',
                bio: 'Founder & CEO with over 10 years of experience in software development and team leadership. Passionate about creating innovative solutions that make a difference.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                imagePosition: 'left',
                social: {
                  github: 'https://github.com',
                  portfolio: 'https://portfolio.com',
                  linkedin: 'https://linkedin.com',
                  instagram: 'https://instagram.com'
                }
              },
              {
                name: 'Jane Doe',
                bio: 'Creative Director & Co-founder specializing in UI/UX design. Brings a perfect blend of aesthetics and functionality to every project.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                imagePosition: 'right',
                social: {
                  github: 'https://github.com',
                  portfolio: 'https://portfolio.com',
                  linkedin: 'https://linkedin.com',
                  instagram: 'https://instagram.com'
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
        {/* Original design */}
        <Title>{aboutData.title || 'About Us'}</Title>
        <Grid>
          <ImageContainer>
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

        {/* New section with content on left and image on right */}
        {aboutData.additionalParagraphs && aboutData.additionalParagraphs.length > 0 && (
          <>
            <SectionDivider />
            <SectionTitle>Our Story</SectionTitle>
            <ContentGrid>
              <ContentSection>
                {renderParagraphs(aboutData.additionalParagraphs, aboutData.additionalHighlights)}
              </ContentSection>
              <SideImage>
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

        {/* New Founders Section */}
        {foundersData && foundersData.founders && foundersData.founders.length > 0 && (
          <FounderSection>
            <SectionDivider />
            <FounderTitle>{foundersData.title || 'Meet Our Founders'}</FounderTitle>
            {foundersData.founders.map((founder, index) => (
              <FounderCard key={index} imagePosition={founder.imagePosition || 'left'}>
                <FounderImageSection imagePosition={founder.imagePosition || 'left'}>
                  <FounderImage>
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/250";
                      }}
                    />
                  </FounderImage>
                  <SocialLinks>
                    {founder.social?.github && (
                      <SocialLink 
                        href={founder.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
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
                      >
                        <FaInstagram />
                      </SocialLink>
                    )}
                  </SocialLinks>
                </FounderImageSection>
                <FounderInfo imagePosition={founder.imagePosition || 'left'}>
                  <FounderName>{founder.name}</FounderName>
                  <FounderBio>{founder.bio}</FounderBio>
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