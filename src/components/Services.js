import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import API from '../api';
import LoadingSpinner from './LoadingSpinner';
import styled from 'styled-components';
import CallToAction from './CallToAction';
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem 3rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #ffffff;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #a0aec0;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 2rem;
  position: relative;
  padding-bottom: 10rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding-bottom: 6rem;
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 3rem;
  padding: 12px;
  box-shadow: 0 10px 20px rgba(148, 163, 184, 0.1);
  background: rgb(14, 15, 16);
  margin-top: -5.2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-top: -4.5rem;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    margin-top: -4rem;
  }

  svg, img, span {
    width: 100%;
    height: 100%;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
  }
`;


const ServiceCard = styled(motion.div)`
  background: rgb(14, 15, 16);
  border-radius: 1rem;
  padding: 2.5rem;
  position: relative;
  z-index: 2;
  border: 1px solid rgba(148, 163, 184, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.75rem;
  }

  &:hover {
  transform: translateY(-5px);
  border-color: #2563eb;
  box-shadow: 0 0 30px rgba(37, 99, 235, 0.0);

  ${ServiceIcon} {
    transform: translateY(-5px) scale(1.1) ;
    border-color: #2563eb;
    box-shadow: 0 0 30px rgba(37, 99, 235, 0.0);
  }
}

`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.35rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const ServiceDescription = styled.p`
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 5px;
  text-align: center;
  display: -webkit-box;
   -webkit-line-clamp: 3;
     -webkit-box-orient: vertical;
     overflow: hidden;  

  @media (max-width: 768px) {
    font-size: 0.95rem;
    -webkit-line-clamp: 4;
  }
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const ServiceFeature = styled.li`
  color: #94a3b8;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  &::before {
    content: '•';
    color: #2563eb;
  }
`;

const LearnMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: #2563eb;
  border: 1px solid #2563eb;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    padding: 0.6rem 1.25rem;
    font-size: 0.9rem;
  }

  &:hover {
    background: #2563eb;
    color: #000000;
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
      width: 14px;
      height: 14px;
    }
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  text-align: center;
  padding: 1rem;
  font-size: 1.1rem;
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

const defaultServices = [
  {
    _id: '1',
    title: 'Frontend Development',
    description: 'Creating responsive and performant user interfaces using modern frameworks like React, Next.js and Vue.',
    icon: '💻',
    features: ['Responsive Web Design', 'Interactive UI/UX'],
    slug: 'frontend-development'
  },
  {
    _id: '2',
    title: 'Backend Development',
    description: 'Building robust, scalable server-side applications and APIs with Node.js, Express, and MongoDB.',
    icon: '⚙️',
    features: ['RESTful API Development', 'Database Design'],
    slug: 'backend-development'
  },
  {
    _id: '3',
    title: 'SEO Optimization',
    description: 'Improving your website\'s visibility in search results to drive more organic traffic.',
    icon: '🔍',
    features: ['Technical SEO Audits', 'On-page Optimization'],
    slug: 'seo-optimization'
  },
  {
    _id: '4',
    title: 'Performance Optimization',
    description: 'Enhancing the speed and performance of your web applications for better user experience.',
    icon: '⚡',
    features: ['Core Web Vitals Optimization', 'Lighthouse Score Improvement'],
    slug: 'performance-optimization'
  }
];

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

        setServices(response.data.data || []);
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
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Header>
          <h1>What I <Emphasis>Offer</Emphasis></h1>
          <p>Explore our comprehensive range of services designed to meet your business needs</p>
        </Header>
        <ServicesGrid>
          {defaultServices.map((service, index) => (
            <ServiceCard
              key={service._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceIcon>
                <span>{service.icon}</span>
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              {service.features && (
                <ServiceFeatures>
                  {service.features.map((feature, idx) => (
                    <ServiceFeature key={idx}>{feature}</ServiceFeature>
                  ))}
                </ServiceFeatures>
              )}
              <LearnMoreButton
                to={`/services/${service.slug}`}
                state={{
                  title: service.title,
                  description: service.description,
                  slug: service.slug,
                  icon: service.icon,
                  features: service.features
                }}
              >
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </LearnMoreButton>
            </ServiceCard>
          ))}
        </ServicesGrid>
        <CallToAction />
      </Container>
    );
  }

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <Container>
      <Header>
        <h1>What I <Emphasis>Offer</Emphasis></h1>
        <p>Explore our comprehensive range of services designed to meet your business needs</p>
      </Header>

      <ServicesGrid>
        {displayServices.map((service, index) => (
          <ServiceCard
            key={service._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceIcon>
              {service.icon && (
                service.icon.startsWith('http') ?
                  <img src={service.icon} alt={service.title} /> :
                  <span>{service.icon}</span>
              )}
            </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            {service.features && (
              <ServiceFeatures>
                {service.features.map((feature, idx) => (
                  <ServiceFeature key={idx}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatures>
            )}
            <LearnMoreButton
              to={`/services/${service.slug}`}
              state={{
                title: service.title,
                description: service.description,
                slug: service.slug,
                icon: service.icon,
                features: service.features
              }}
            >
              <span>Learn More</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </LearnMoreButton>
          </ServiceCard>
        ))}
      </ServicesGrid>
      <CallToAction />
    </Container>
  );
};

export default Services;