import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import API from '../api';
import LoadingSpinner from '../components/LoadingSpinner';
import CallToAction from '../components/CallToAction';

const Container = styled.div`
  padding: 0;
  margin: 0 auto;
  width: 100%;
  font-family: 'Inter', sans-serif;
  background: #0a0a0a;
  color: var(--color-text-primary);
  min-height: 100vh;
`;

const ServiceHeader = styled.div`
background: linear-gradient(135deg, rgba(var(--color-primary-rgb), -0.7) 15%,hsl(217, 76.70%,48.80%) 150%);  padding: 6rem 2rem 6rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 4rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  backdrop-filter: blur(10px);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

const DecorativeCircle = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.1) 0%, rgba(var(--color-primary-rgb), 0) 70%);
  border-radius: 50%;
  top: -200px;
  left: -200px;
  z-index: 1;
  animation: float 6s ease-in-out infinite;
  filter: blur(40px);

  @keyframes float {
    0% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(20px, 20px) rotate(5deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }
`;

const Title = styled(motion.h1)`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 1.5rem;
  max-width: 1200px;
  line-height: 1.2;
  position: relative;
  display: inline-block;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100px;
  }
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.8;
  color: var(--color-text-secondary);
  max-width: 1200px;
  margin-bottom: 2.5rem;
  font-weight: 400;
  position: relative;
  padding-left: 1.5rem;
  border-left: 3px solid rgba(var(--color-primary-rgb), 0.2);
  backdrop-filter: blur(5px);
`;

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom:6rem;
  
`;

const SubSectionTitle = styled(motion.h2)`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: var(--color-heading);
  margin-bottom: 3rem;
  font-weight: 600;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 120px;
  }
`;

const SubServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
  padding: 1rem 0 6rem 0rem;
`;

const SubServiceCard = styled(motion.div)`
  background: rgba(30, 30, 30, 0.8);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid var(--color-border);
  transform-origin: center;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(var(--color-primary-rgb), 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.1) 0%, rgba(var(--color-primary-rgb), 0) 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const SubServiceImage = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  background-color: rgba(var(--color-primary-rgb), 0.2);
  min-height: 240px;
  border-bottom: 1px solid var(--color-border);
  transform-origin: center;
  transition: transform 0.3s ease;
  filter: grayscale(20%);

  ${SubServiceCard}:hover & {
    transform: scale(1.05);
    filter: grayscale(0%);
  }
`;

const SubServiceContent = styled.div`
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const SubServiceTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
  position: relative;
  padding-bottom: 0.8rem;
  font-weight: 600;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 50px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  ${SubServiceCard}:hover &::after {
    width: 100px;
  }
`;

const SubServiceDescription = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  

  ${SubServiceCard}:hover & {
    color: var(--color-text-primary);
  }
`;

const RequestButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-text-primary);
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
  box-shadow: 0 4px 15px rgba(var(--color-primary-rgb), 0.3);
  position: relative;
  overflow: hidden;
  align-self: flex-start;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(var(--color-primary-rgb), 0.4);
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #ff6b6b;
  padding: 2rem;
  font-size: 1.1rem;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 12px;
  margin: 2rem auto;
  max-width: 600px;
  border: 1px solid rgba(255, 107, 107, 0.2);
  backdrop-filter: blur(5px);
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


const ServiceDetails = () => {
  const { id: slug } = useParams();
  const location = useLocation();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const stateData = location.state || {};

  useEffect(() => {
    // Use the database data directly (from your request)
    const databaseData = {
      "_id": "67f0e71133569e2019f8aa0f",
      "title": "New Service",
      "slug": "new",
      "description": "New Service demo",
      "icon": "✨",
      "createdAt": "1743841041056",
      "updatedAt": "1743841041059",
      "subServices": [
        {
          "title": "Sub-services",
          "description": "Sub-services Description",
          "imageUrl": "https://placehold.co/800x400/6d43b8/ffffff?text=Sub-services",
          "features": [],
          "_id": "67f0eec59a0bdd0a4cb8741a"
        },
        {
          "title": "Second sub service",
          "description": "Second sub",
          "imageUrl": "https://placehold.co/800x400/9a7ed0/ffffff?text=Second+Sub+Service",
          "features": [],
          "_id": "67f0eec59a0bdd0a4cb8741b"
        }
      ]
    };

    // Use the database data instead of state or API data
    setService(databaseData);
    setLoading(false);
    
    // Only fall back to API call if no database data is available
    // (keeping this part as fallback, but it won't run with the above code)
    if (false && stateData.title && stateData.description && stateData.slug) {
      // Make sure subServices exists even on state data
      if (!stateData.subServices) {
        stateData.subServices = [];
      }
      setService(stateData);
      setLoading(false);
      return;
    }

    const fetchServiceDetails = async () => {
      try {
        setLoading(true);
        
        // Directly use the API.get method with the full URL for debugging
        const response = await API.get(`/api/services/slug/${slug}`);
        
        if (!response.data || !response.data.success) {
          throw new Error((response.data && response.data.message) || 'Failed to fetch service details');
        }
        
        const serviceData = response.data.data;
        
        // Ensure subServices is always an array, even if it's null or undefined
        if (!serviceData.subServices) {
          serviceData.subServices = [];
        }
        
        // No longer adding sample subService data when none is found
        
        setService(serviceData);
      } catch (err) {
        console.error('Error fetching service details:', err);
        setError(err.message || 'Failed to load service details');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchServiceDetails();
    }
  }, [slug, stateData]);
  
  // Add debug effect to check image URLs (moved before conditionals)
  useEffect(() => {
    if (!service || !service.subServices) return;
    
    const subServices = service.subServices;
    // Check each subService image
    if (subServices.length > 0) {
      subServices.forEach((subService, index) => {
        if (subService.imageUrl) {
          // Test image loading
          const testImage = new Image();
          testImage.onload = () => console.log(`Image ${index} loaded: ${subService.imageUrl}`);
          testImage.onerror = () => {
            console.error(`Image ${index} failed to load: ${subService.imageUrl}`);
            // If we're in development, suggest a solution
            if (process.env.NODE_ENV === 'development') {
              console.log(`Try using a reliable image service like: https://placehold.co/800x400`);
            }
          };
          testImage.src = subService.imageUrl;
        }
      });
    }
  }, [service]);

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
        <ErrorMessage>{error}</ErrorMessage>
      </Container>
    );
  }

  if (!service) {
    return (
      <Container>
        <ErrorMessage>Service not found</ErrorMessage>
      </Container>
    );
  }

  // Use subServices array if it exists and has items, otherwise use empty array
  const subServices = Array.isArray(service.subServices) && service.subServices.length > 0 
    ? service.subServices 
    : [];
  
  return (
    <Container>
      <ServiceHeader>
        <DecorativeCircle />
        <HeaderContent>
          <AnimatePresence>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {service.title}
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {service.description}
            </Description>
            <RequestButton
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request {service.title}
            </RequestButton>
          </AnimatePresence>
        </HeaderContent>
      </ServiceHeader>

      <ContentSection>
        {subServices.length > 0 && (
          <>
            <SubSectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our <Emphasis>Services</Emphasis>
            </SubSectionTitle>
            <SubServicesGrid>
              <AnimatePresence>
                {subServices.map((subService, index) => (
                  <SubServiceCard
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <SubServiceImage 
                      src={subService.imageUrl || 'https://placehold.co/800x400/cccccc/666666?text=No+Image'}
                      alt={subService.title || 'Untitled Service'} 
                      onLoad={(e) => {
                        e.target.style.display = 'block';
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/800x400/cccccc/666666?text=Image+Not+Available';
                      }}
                    />
                    <SubServiceContent>
                      <SubServiceTitle>{subService.title || 'Untitled Service'}</SubServiceTitle>
                      <SubServiceDescription>
                        {subService.description || 'No description available'}
                      </SubServiceDescription>
                    </SubServiceContent>
                  </SubServiceCard>
                ))}
              </AnimatePresence>
            </SubServicesGrid>
          </>
        )}
      <CallToAction/>
      </ContentSection>
    </Container>
  );
};

export default ServiceDetails;