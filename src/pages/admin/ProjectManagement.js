import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useToast } from '../../components/Toast';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const Container = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);

  h1 {
    color: ${props => props.theme.colors.text};
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      width: 24px;
      height: 24px;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const AddButton = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
    color: ${props => props.theme.colors.primary};
  }
`;

const ProjectSubtitle = styled.h4`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1rem;
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const MetaItem = styled.span`
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const WebsiteLink = styled.a`
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.primary}25;
    transform: translateY(-2px);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Technology = styled.span`
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const Button = styled(motion.button)`
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &.edit {
    background: ${props => props.theme.colors.primary}15;
    color: ${props => props.theme.colors.primary};
  }

  &.delete {
    background: ${props => props.theme.colors.error}15;
    color: ${props => props.theme.colors.error};
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  padding: 2rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

// Add a utility function to handle image URLs
const getImageUrl = (imagePath) => {
  if (!imagePath) return 'https://via.placeholder.com/400x300?text=No+Image';
  
  // If it's already a full URL, return it
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // Otherwise, assume it's a relative path and prepend the API URL
  return `${process.env.REACT_APP_API_URL || ''}${imagePath}`;
};

const ProjectManagement = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    mainimage: '',
    secondaryimage: '',
    publishedYear: '',
    shortDescription: '',
    officialWebsiteLink: '',
    gitHubLink: '',
    services: '',
    industries: '',
    technicalDescription: '',
    learningDescription: '',
    technologies: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToast();

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
        }
      };
      const response = await axios.get('/api/projects', config);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      const errorMessage = error.response?.data?.message || 
                         error.response?.data?.error || 
                         'Error fetching projects';
      addToast(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const projectData = {
        title: formData.title,
        subtitle: formData.subtitle,
        mainimage: formData.mainimage,
        secondaryimage: formData.secondaryimage,
        publishedYear: formData.publishedYear ? parseInt(formData.publishedYear) : undefined,
        shortDescription: formData.shortDescription,
        officialWebsiteLink: formData.officialWebsiteLink,
        gitHubLink: formData.gitHubLink,
        services: formData.services.split(',').map(service => service.trim()).filter(service => service),
        industries: formData.industries.split(',').map(industry => industry.trim()).filter(industry => industry),
        technicalDescription: formData.technicalDescription,
        learningDescription: formData.learningDescription,
        technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(tech => tech)
      };

      // Add auth token to request headers
      const config = {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
          'Content-Type': 'application/json'
        }
      };

      if (editingProject) {
        const response = await axios.put(`/api/projects/${editingProject._id}`, projectData, config);
        console.log('Update response:', response);
        addToast('Project updated successfully', 'success');
      } else {
        const response = await axios.post('/api/projects', projectData, config);
        console.log('Create response:', response);
        addToast('Project created successfully', 'success');
      }

      setShowModal(false);
      setEditingProject(null);
      setFormData({
        title: '',
        subtitle: '',
        mainimage: '',
        secondaryimage: '',
        publishedYear: '',
        shortDescription: '',
        officialWebsiteLink: '',
        gitHubLink: '',
        services: '',
        industries: '',
        technicalDescription: '',
        learningDescription: '',
        technologies: ''
      });
      fetchProjects();
    } catch (error) {
      console.error('Error saving project:', error);
      const errorMessage = error.response?.data?.message || 
                          error.response?.data?.error || 
                          error.message || 
                          'Error saving project';
      addToast(errorMessage, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title || '',
      subtitle: project.subtitle || '',
      mainimage: project.mainimage || '',
      secondaryimage: project.secondaryimage || '',
      publishedYear: project.publishedYear || '',
      shortDescription: project.shortDescription || '',
      officialWebsiteLink: project.officialWebsiteLink || '',
      gitHubLink: project.gitHubLink || '',
      services: project.services ? project.services.join(', ') : '',
      industries: project.industries ? project.industries.join(', ') : '',
      technicalDescription: project.technicalDescription || '',
      learningDescription: project.learningDescription || '',
      technologies: project.technologies ? project.technologies.join(', ') : ''
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        const config = {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
          }
        };
        await axios.delete(`/api/projects/${id}`, config);
        addToast('Project deleted successfully', 'success');
        fetchProjects();
      } catch (error) {
        console.error('Error deleting project:', error);
        const errorMessage = error.response?.data?.message || 
                           error.response?.data?.error || 
                           'Error deleting project';
        addToast(errorMessage, 'error');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      mainimage: '',
      secondaryimage: '',
      publishedYear: '',
      shortDescription: '',
      officialWebsiteLink: '',
      gitHubLink: '',
      services: '',
      industries: '',
      technicalDescription: '',
      learningDescription: '',
      technologies: ''
    });
    setEditingProject(null);
  };

  if (loading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <Header>
        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
          Project Management
        </h1>
        <AddButton
          onClick={() => {
            setEditingProject(null);
            setFormData({
              title: '',
              subtitle: '',
              mainimage: '',
              secondaryimage: '',
              publishedYear: '',
              shortDescription: '',
              officialWebsiteLink: '',
              gitHubLink: '',
              services: '',
              industries: '',
              technicalDescription: '',
              learningDescription: '',
              technologies: ''
            });
            setShowModal(true);
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Add New Project
        </AddButton>
      </Header>

      <ProjectGrid>
        {projects.map(project => (
          <ProjectCard
            key={project._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectImage src={getImageUrl(project.mainimage)} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
                {project.title}
              </ProjectTitle>
              {project.subtitle && (
                <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
              )}
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectMeta>
                {project.date && (
                  <MetaItem>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {project.date}
                  </MetaItem>
                )}
                {project.githubLink && (
                  <MetaItem>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    GitHub
                  </MetaItem>
                )}
                {project.websiteLink && (
                  <WebsiteLink href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    Visit Website
                  </WebsiteLink>
                )}
              </ProjectMeta>
              <TechnologiesContainer>
                {project.technologies.map(tech => (
                  <Technology key={tech}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    {tech}
                  </Technology>
                ))}
              </TechnologiesContainer>
              <ActionButtons>
                <Button 
                  className="edit"
                  onClick={() => handleEdit(project)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                  Edit
                </Button>
                <Button 
                  className="delete"
                  onClick={() => handleDelete(project._id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                  </svg>
                  Delete
                </Button>
              </ActionButtons>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>

      {showModal && (
        <Modal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
        >
          <ModalContent
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <h2>{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Title *</Label>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Subtitle</Label>
                <Input
                  type="text"
                  name="subtitle"
                  value={formData.subtitle}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Main Image URL *</Label>
                <Input
                  type="url"
                  name="mainimage"
                  value={formData.mainimage}
                  onChange={handleChange}
                  placeholder="Enter main image URL"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Secondary Image URL</Label>
                <Input
                  type="url"
                  name="secondaryimage"
                  value={formData.secondaryimage}
                  onChange={handleChange}
                  placeholder="Enter secondary image URL"
                />
              </FormGroup>
              <FormGroup>
                <Label>Published Year</Label>
                <Input
                  type="number"
                  name="publishedYear"
                  value={formData.publishedYear}
                  onChange={handleChange}
                  placeholder="e.g., 2024"
                />
              </FormGroup>
              <FormGroup>
                <Label>Short Description</Label>
                <TextArea
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  placeholder="Brief description of the project"
                />
              </FormGroup>
              <FormGroup>
                <Label>Official Website Link</Label>
                <Input
                  type="url"
                  name="officialWebsiteLink"
                  value={formData.officialWebsiteLink}
                  onChange={handleChange}
                  placeholder="https://example.com"
                />
              </FormGroup>
              <FormGroup>
                <Label>GitHub Link *</Label>
                <Input
                  type="url"
                  name="gitHubLink"
                  value={formData.gitHubLink}
                  onChange={handleChange}
                  placeholder="https://github.com/..."
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Services (comma-separated)</Label>
                <Input
                  type="text"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  placeholder="Web Development, Mobile Apps, ..."
                />
              </FormGroup>
              <FormGroup>
                <Label>Industries (comma-separated)</Label>
                <Input
                  type="text"
                  name="industries"
                  value={formData.industries}
                  onChange={handleChange}
                  placeholder="Healthcare, Finance, ..."
                />
              </FormGroup>
              <FormGroup>
                <Label>Technical Description</Label>
                <TextArea
                  name="technicalDescription"
                  value={formData.technicalDescription}
                  onChange={handleChange}
                  placeholder="Detailed technical description"
                />
              </FormGroup>
              <FormGroup>
                <Label>Learning Description</Label>
                <TextArea
                  name="learningDescription"
                  value={formData.learningDescription}
                  onChange={handleChange}
                  placeholder="What was learned from this project"
                />
              </FormGroup>
              <FormGroup>
                <Label>Technologies *</Label>
                <Input
                  type="text"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleChange}
                  placeholder="React, Node.js, MongoDB, ..."
                  required
                />
              </FormGroup>
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : editingProject ? 'Update Project' : 'Create Project'}
              </SubmitButton>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default ProjectManagement; 