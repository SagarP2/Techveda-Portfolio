import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  padding-bottom:6rem;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primaryDark};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    color: ${(props) => props.theme.colors.text};
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .meta {
    color: ${(props) => props.theme.colors.textSecondary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1rem;
    flex-wrap: wrap;
  }
`;

const GitHubLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
 
border:1px solid rgb(255, 255, 255);
  padding: 0.6rem 1.4rem;
  border-radius: 18px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right:20px;

  svg {
    width: 23px;
    height: 23px;
  }
  span{
    padding-left:6px;
    font-size:18px;
  }

  &:hover {
    color: #3b82f6;
    border:1px solid #3b82f6;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 8rem;
`;

const MainImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const SecondaryImage = styled.img`
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const PublishedBadge = styled(motion.div)`
  display: inline-block;
  background: #2563eb;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 9999px;
  padding: 0.4em 1.2em;
  margin: 1.6rem 0;
  letter-spacing: 0.05em;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 1.2rem;
  line-height: 1.1;
`;

const Subtitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 1200;
  background:linear-gradient(80deg, #2563eb , #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin-bottom: 2.5rem;
`;

const InfoGrid = styled(motion.div)`
  display: grid;
   grid-template-columns: 650px 200px 220px; /* Column 1: fixed 300px, Column 2: flexible, Column 3: fixed 200px */
  gap: 5rem;
  margin: 2rem 0 0 0;
`;

const InfoCard = styled(motion.div)`

  

`;

const SectionLabel = styled.div`
 background: linear-gradient(90deg, #4299e1, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin-bottom: 0.7rem;
  letter-spacing: 0.04em;
  font-size: 1.1rem;
`;

const TechRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin:0 0 1rem 0;
`;

const TechPill = styled.div`
  background:rgba(58, 78, 121, 0.13);
  color:rgb(61, 94, 164);
  padding: 0.5rem 1.1rem;
  border-radius: 1.2rem;
  font-size: 1rem;
  font-weight: 1200;
`;

const LinkStyled = styled(motion.a)`
  color: #2563eb;
  text-decoration: underline;
  font-weight: 400;
  margin-right: 1.2rem;
  font-size: 1.3rem;
  &:hover {
    color: #fff;
    background: #2563eb;
    text-decoration: none;
    border-radius: 0.3em;
    padding: 0.1em 0.4em;
    transition: all 0.2s;
  }
`;

const DetailCard = styled(motion.div)`
 
  padding: 2rem 0rem;
  
`;

const DetailTitle = styled.h3`
 background: linear-gradient(90deg, #2563eb , rgb(255, 255, 255) );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.4rem;
  font-weight: 1200;
  margin-bottom: 1.2rem;
`;

const ProjectDetail = () => {
  const { id } = useParams()
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    try {
      const response = await axios.get(`/api/projects/${id}`);
      setProject(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching project:", error);
      setError("Failed to fetch project details");
      setProject(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }

  if (error || !project) {
    return (
      <Container>
        <Header>
          <h1>Project not found</h1>
          <BackButton to="/projects">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </BackButton>
        </Header>
      </Container>
    );
  }
  return (
    <Container>
      <BackButton to="/projects">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Projects
      </BackButton>


      {project.mainimage && (
        <MainImage src={project.mainimage} alt={project.title} />
      )}

      <PublishedBadge
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        PUBLISHED IN {project.publishedYear || "2023"}
      </PublishedBadge>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {project.title}
      </Title>

      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {project.subtitle}
      </Subtitle>

      <InfoGrid
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
              delayChildren: 0.4,
            },
          },
        }}
      >
        <InfoCard
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
        >

          <div style={{ color: "#fff", fontSize: "1.1rem" }}>{project.shortDescription}</div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            style={{ marginTop: '2rem' }}
          >

            {project.gitHubLink && (
              <GitHubLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg><span>GitHub</span>
              </GitHubLink>
            )}
            {project.officialWebsiteLink && (
              <GitHubLink href={project.officialWebsiteLink} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span>Website</span>
              </GitHubLink>
            )}

          </motion.div>

        </InfoCard>
        <InfoCard
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
        >
          <SectionLabel>SERVICES</SectionLabel>
          {project.services && project.services.map((service, i) => (
            <div key={i} style={{ color: "#fff", marginBottom: "0.5rem" }}>{service}</div>
          ))}
        </InfoCard>
        <InfoCard
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
        >
          <SectionLabel>INDUSTRIES</SectionLabel>
          {project.industries && project.industries.map((industry, i) => (
            <div key={i} style={{ color: "#fff", marginBottom: "0.5rem" }}>{industry}</div>
          ))}
        </InfoCard>
      </InfoGrid>

      <DetailCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <DetailTitle>Technical Details</DetailTitle>
        <div style={{ color: '#fff', fontSize: '1.08rem', lineHeight: 1.7 }}>{project.technicalDescription}</div>
      </DetailCard>
      {project.technologies && project.technologies.length > 0 && (
        <TechRow
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {project.technologies.map((tech, i) => (
            <TechPill key={i}>{tech}</TechPill>
          ))}
        </TechRow>
      )}
      <DetailCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.3 }}
      >
        <DetailTitle>Learning Outcomes</DetailTitle>
        <div style={{ color: '#fff', fontSize: '1.1rem', lineHeight: 1.7 }}>{project.learningDescription}</div>
      </DetailCard>
      {project.secondaryimage && (
        <ImageContainer>
          <SecondaryImage
            src={project.secondaryimage}
            alt={`${project.title} - Additional view`}
          />
        </ImageContainer>
      )}

      <CallToAction />
    </Container>
  );
};

export default ProjectDetail;
