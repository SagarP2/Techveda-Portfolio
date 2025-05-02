import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import API from '../api';
import LoadingSpinner from '../components/LoadingSpinner';
import CallToAction from '../components/CallToAction';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #0a0b0f;
  color: #fff;
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #fff;
  }
  
  p {
    color: #a0a0a0;
    font-size: 1.2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
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

const ServiceCard = styled(motion.div)`
  background-color: #1a1b23;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  

  
  .icon-container {
    width: 48px;
  height: 48px;
  margin-bottom: 1.5rem;
  color: #2563eb;

  svg, img, span {
    width: 100%;
    height: 100%;
    font-size: 2rem;
  }
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #fff;
  }
  
  p {
    color: #a0a0a0;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .learn-more {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
    
    svg {
      transition: transform 0.3s ease;
    }
    
    &:hover svg {
      transform: translateX(5px);
    }
  }
`;

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
        <div className="error-message">{error}</div>
      </ServicesContainer>
    );
  }

  return (
    <ServicesContainer>
      <ServicesHeader>
        <h1>What I <Emphasis>Offer</Emphasis></h1>
        <p>Comprehensive solutions to elevate your digital presence</p>
      </ServicesHeader>

      <ServicesGrid>
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="icon-container">
              {service.icon && (
                service.icon.startsWith('http') ? 
                <img src={service.icon} alt={service.title} /> : 
                <span>{service.icon}</span>
              )}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link 
              to={`/services/${service.slug}`}
              state={{ 
                title: service.title, 
                description: service.description, 
                slug: service.slug,
                icon: service.icon,
                subServices: service.subServices
              }}
              className="learn-more"
            >
              <span>Learn More</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;