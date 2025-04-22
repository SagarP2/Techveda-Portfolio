import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import API from '../api';
import LoadingSpinner from '../components/LoadingSpinner';

const ServicesContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    color: var(--color-text);
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      width: 60px;
      height: 4px;
      background: var(--color-primary);
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2px;
    }
  }

  p {
    font-size: 1.2rem;
    color: var(--color-text-secondary);
    max-width: 800px;
    margin: 1.5rem auto 0;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  height: 80px;
  width: 80px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
  box-shadow: 0 8px 20px rgba(var(--color-primary-rgb), 0.3);
  font-size: 32px;
  color: white;
  margin: 0 auto 1.5rem;
  transition: all 0.4s ease;
  
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

const ServiceCard = styled(motion.div)`
  position: relative;
  background: rgba(25, 25, 30, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 2.5rem 2rem;
  transition: all 0.4s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(var(--color-primary-rgb), 0.2);
    
    &:before {
      opacity: 1;
    }
    
    ${IconWrapper} {
      transform: scale(1.1) rotate(5deg);
      box-shadow: 0 12px 30px rgba(var(--color-primary-rgb), 0.4);
    }
  }

  h3 {
    color: var(--color-text);
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    color: var(--color-text-secondary);
    margin-bottom: 2rem;
    text-align: center;
    line-height: 1.6;
    flex-grow: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 4.8em; /* 3 lines * 1.6 line-height */
  }
`;

const ServiceLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  box-shadow: 0 4px 15px rgba(var(--color-primary-rgb), 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  svg {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }
  
  span {
    position: relative;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(var(--color-primary-rgb), 0.4);
    
    &:before {
      opacity: 1;
    }
    
    svg {
      transform: translateX(3px);
    }
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--color-error);
  background: rgba(255, 0, 0, 0.1);
  border-radius: 8px;
  margin: 1rem 0;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await API.get('/api/services');
        if (!response.data.success) {
          throw new Error(response.data.message || 'Failed to fetch services');
        }
        
        setServices(response.data.data);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError(err.message || 'Failed to load services');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <ServicesContainer>
        <LoadingSpinner />
      </ServicesContainer>
    );
  }

  if (error) {
    return (
      <ServicesContainer>
        <ErrorMessage>{error}</ErrorMessage>
      </ServicesContainer>
    );
  }

  return (
    <ServicesContainer>
      <ServicesHeader>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Explore our comprehensive range of services designed to meet your business needs
        </motion.p>
      </ServicesHeader>

      <ServicesGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {services.map((service) => (
            <ServiceCard
              key={service._id}
              as={motion.div}
              variants={cardVariants}
              whileHover="hover"
              layout
            >
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <IconWrapper>
                  {service.icon && (
                    service.icon.startsWith('http') ? 
                    <img src={service.icon} alt={service.title} /> : 
                    <span>{service.icon}</span>
                  )}
                </IconWrapper>
              </motion.div>
              <motion.h3
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {service.description}
              </motion.p>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <ServiceLink 
                  to={`/services/${service.slug}`}
                  state={{ 
                    title: service.title, 
                    description: service.description, 
                    slug: service.slug,
                    icon: service.icon,
                    subServices: service.subServices
                  }}
                >
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </ServiceLink>
              </motion.div>
            </ServiceCard>
          ))}
        </AnimatePresence>
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;