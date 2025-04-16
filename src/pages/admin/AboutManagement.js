import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useToast } from '../../components/Toast';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-heading);
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: var(--color-primary);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-primary-dark);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ParagraphItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const ParagraphHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ParagraphActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  background: ${props => props.danger ? 'rgba(220, 38, 38, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.danger ? 'rgb(248, 113, 113)' : 'var(--color-text)'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.danger ? 'rgba(220, 38, 38, 0.3)' : 'rgba(255, 255, 255, 0.2)'};
  }
`;

const HighlightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const HighlightInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const HighlightSelect = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const AddButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px dashed rgba(255, 255, 255, 0.2);
  background: transparent;
  color: var(--color-text);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const ImagePreview = styled.div`
  margin-top: 1rem;
  
  img {
    max-width: 100%;
    max-height: 300px;
    border-radius: 8px;
    object-fit: cover;
  }
`;

const SectionDivider = styled.hr`
  margin: 2rem 0;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FounderCard = styled(Card)`
  background: rgba(255, 255, 255, 0.03);
`;

const FounderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SocialLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const ImagePositionSelect = styled.select`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const AboutManagement = () => {
  const [formData, setFormData] = useState({
    title: 'About Us',
    image: '',
    paragraphs: [''],
    highlights: [],
    founders: {
      title: 'Meet Our Team',
      founders: []
    }
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const [aboutResponse, foundersResponse] = await Promise.all([
        axios.get('/api/about'),
        axios.get('/api/founders').catch(() => ({ data: null }))
      ]);

      setFormData({
        title: aboutResponse.data?.title || 'About Us',
        image: aboutResponse.data?.image || '',
        paragraphs: aboutResponse.data?.paragraphs || [''],
        highlights: aboutResponse.data?.highlights || [],
        founders: foundersResponse.data || {
          title: 'Meet Our Team',
          founders: []
        }
      });
    } catch (error) {
      console.error('Error fetching content:', error);
      addToast('Failed to load content', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleParagraphChange = (index, value) => {
    const newParagraphs = [...formData.paragraphs];
    newParagraphs[index] = value;
    setFormData({
      ...formData,
      paragraphs: newParagraphs
    });
  };

  const addParagraph = () => {
    setFormData({
      ...formData,
      paragraphs: [...formData.paragraphs, '']
    });
  };

  const removeParagraph = (index) => {
    if (formData.paragraphs.length <= 1) {
      addToast('Cannot remove the last paragraph', 'error');
      return;
    }
    
    const newParagraphs = formData.paragraphs.filter((_, i) => i !== index);
    
    // Update highlights to reflect the removed paragraph
    const newHighlights = formData.highlights.map(highlight => {
      if (highlight.paragraphIndex === index) {
        return null; // Remove highlights for the deleted paragraph
      } else if (highlight.paragraphIndex > index) {
        return {
          ...highlight,
          paragraphIndex: highlight.paragraphIndex - 1 // Adjust index for paragraphs after the deleted one
        };
      }
      return highlight;
    }).filter(Boolean); // Remove null values
    
    setFormData({
      ...formData,
      paragraphs: newParagraphs,
      highlights: newHighlights
    });
  };

  const handleHighlightChange = (index, field, value) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = {
      ...newHighlights[index],
      [field]: field === 'paragraphIndex' ? parseInt(value) : value
    };
    setFormData({
      ...formData,
      highlights: newHighlights
    });
  };

  const addHighlight = () => {
    setFormData({
      ...formData,
      highlights: [
        ...formData.highlights,
        { text: '', paragraphIndex: 0 }
      ]
    });
  };

  const removeHighlight = (index) => {
    const newHighlights = formData.highlights.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      highlights: newHighlights
    });
  };

  const handleFounderChange = (index, field, value) => {
    const newFounders = [...formData.founders.founders];
    if (field.startsWith('social.')) {
      const socialField = field.split('.')[1];
      newFounders[index] = {
        ...newFounders[index],
        social: {
          ...newFounders[index].social,
          [socialField]: value
        }
      };
    } else {
      newFounders[index] = {
        ...newFounders[index],
        [field]: value
      };
    }
    setFormData({
      ...formData,
      founders: {
        ...formData.founders,
        founders: newFounders
      }
    });
  };

  const addFounder = () => {
    const newFounder = {
      name: '',
      bio: '',
      image: '',
      imagePosition: 'left',
      social: {
        github: '',
        portfolio: '',
        linkedin: '',
        instagram: ''
      }
    };
    setFormData({
      ...formData,
      founders: {
        ...formData.founders,
        founders: [...formData.founders.founders, newFounder]
      }
    });
  };

  const removeFounder = (index) => {
    const newFounders = formData.founders.founders.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      founders: {
        ...formData.founders,
        founders: newFounders
      }
    });
  };

  const handleFoundersTitleChange = (e) => {
    setFormData({
      ...formData,
      founders: {
        ...formData.founders,
        title: e.target.value
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        addToast('No authentication token found. Please log in again.', 'error');
        setSaving(false);
        return;
      }

      console.log('Submitting form data:', {
        about: {
          title: formData.title,
          image: formData.image,
          paragraphs: formData.paragraphs,
          highlights: formData.highlights
        },
        founders: {
          title: formData.founders.title,
          founders: formData.founders.founders
        }
      });

      // Validate form data
      if (!formData.title.trim()) {
        addToast('Title is required', 'error');
        setSaving(false);
        return;
      }
      
      if (!formData.image.trim()) {
        addToast('Image URL is required', 'error');
        setSaving(false);
        return;
      }
      
      if (formData.paragraphs.some(p => !p.trim())) {
        addToast('All paragraphs must have content', 'error');
        setSaving(false);
        return;
      }

      // Update about content first
      try {
        console.log('Updating about content...');
        const aboutResponse = await axios.put('/api/about', {
          title: formData.title,
          image: formData.image,
          paragraphs: formData.paragraphs,
          highlights: formData.highlights
        }, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        console.log('About update response:', aboutResponse.data);
      } catch (aboutError) {
        console.error('Error updating about content:', aboutError);
        throw aboutError;
      }

      // Then update founders content
      try {
        console.log('Updating founders content...');
        const foundersData = {
          title: formData.founders.title,
          founders: formData.founders.founders.map(founder => ({
            name: founder.name.trim(),
            bio: founder.bio.trim(),
            image: founder.image.trim(),
            imagePosition: founder.imagePosition || 'left',
            social: {
              github: founder.social?.github || '',
              portfolio: founder.social?.portfolio || '',
              linkedin: founder.social?.linkedin || '',
              instagram: founder.social?.instagram || ''
            }
          }))
        };
        console.log('Founders data to submit:', foundersData);
        
        const foundersResponse = await axios.put('/api/founders', foundersData, {
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          timeout: 10000 // 10 second timeout
        });
        console.log('Founders update response:', foundersResponse.data);
      } catch (foundersError) {
        console.error('Error updating founders content:', foundersError);
        if (foundersError.response) {
          console.error('Founders error response:', foundersError.response.data);
        }
        throw foundersError;
      }
      
      addToast('Content updated successfully', 'success');
    } catch (error) {
      console.error('Error updating content:', error);
      console.error('Error response:', error.response?.data);
      console.error('Error request:', error.config);
      
      // More specific error messages based on the error response
      if (!localStorage.getItem('admin_token')) {
        addToast('No authentication token found. Please log in again.', 'error');
      } else if (error.response?.status === 401) {
        addToast('Authentication failed. Please log in again.', 'error');
      } else if (error.response?.status === 400) {
        addToast(error.response.data.message || 'Invalid data provided', 'error');
      } else if (error.response?.status === 404) {
        addToast('API endpoint not found. Please check server configuration.', 'error');
      } else if (error.code === 'ECONNABORTED') {
        addToast('Request timed out. Please try again.', 'error');
      } else if (!error.response) {
        addToast('Network error. Please check your connection.', 'error');
      } else {
        addToast(`Failed to update content: ${error.message}`, 'error');
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Container>
        <Title>About Management</Title>
        <Card>
          <p>Loading...</p>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Title>About Management</Title>
      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Image URL</Label>
            <Input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
            {formData.image && (
              <ImagePreview>
                <img 
                  src={formData.image} 
                  alt="About page image preview" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/800x450?text=Invalid+Image+URL';
                  }}
                />
              </ImagePreview>
            )}
          </FormGroup>
          
          <FormGroup>
            <Label>Paragraphs</Label>
            <ParagraphContainer>
              {formData.paragraphs.map((paragraph, index) => (
                <ParagraphItem key={index}>
                  <ParagraphHeader>
                    <Label>Paragraph {index + 1}</Label>
                    <ParagraphActions>
                      <ActionButton 
                        type="button" 
                        onClick={() => removeParagraph(index)}
                        danger
                      >
                        Remove
                      </ActionButton>
                    </ParagraphActions>
                  </ParagraphHeader>
                  <TextArea
                    value={paragraph}
                    onChange={(e) => handleParagraphChange(index, e.target.value)}
                    required
                  />
                </ParagraphItem>
              ))}
            </ParagraphContainer>
            <AddButton type="button" onClick={addParagraph}>
              + Add Paragraph
            </AddButton>
          </FormGroup>
          
          <FormGroup>
            <Label>Highlights</Label>
            <HighlightContainer>
              {formData.highlights.map((highlight, index) => (
                <HighlightItem key={index}>
                  <HighlightInput
                    type="text"
                    value={highlight.text}
                    onChange={(e) => handleHighlightChange(index, 'text', e.target.value)}
                    placeholder="Highlight text"
                  />
                  <HighlightSelect
                    value={highlight.paragraphIndex}
                    onChange={(e) => handleHighlightChange(index, 'paragraphIndex', e.target.value)}
                  >
                    {formData.paragraphs.map((_, i) => (
                      <option key={i} value={i}>
                        Paragraph {i + 1}
                      </option>
                    ))}
                  </HighlightSelect>
                  <ActionButton 
                    type="button" 
                    onClick={() => removeHighlight(index)}
                    danger
                  >
                    Remove
                  </ActionButton>
                </HighlightItem>
              ))}
            </HighlightContainer>
            <AddButton type="button" onClick={addHighlight}>
              + Add Highlight
            </AddButton>
          </FormGroup>
          
          <SectionDivider />
          
          {/* Founders Section */}
          <FormGroup>
            <Label>Founders Section Title</Label>
            <Input
              type="text"
              value={formData.founders.title}
              onChange={handleFoundersTitleChange}
              required
            />
          </FormGroup>

          {formData.founders.founders.map((founder, index) => (
            <FounderCard key={index}>
              <FounderHeader>
                <Label>Founder {index + 1}</Label>
                <ActionButton 
                  type="button" 
                  onClick={() => removeFounder(index)}
                  danger
                >
                  Remove Founder
                </ActionButton>
              </FounderHeader>

              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  value={founder.name}
                  onChange={(e) => handleFounderChange(index, 'name', e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Bio</Label>
                <TextArea
                  value={founder.bio}
                  onChange={(e) => handleFounderChange(index, 'bio', e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  value={founder.image}
                  onChange={(e) => handleFounderChange(index, 'image', e.target.value)}
                  required
                />
                {founder.image && (
                  <ImagePreview>
                    <img 
                      src={founder.image} 
                      alt={`${founder.name} preview`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/250?text=Invalid+Image+URL';
                      }}
                    />
                  </ImagePreview>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Image Position</Label>
                <ImagePositionSelect
                  value={founder.imagePosition}
                  onChange={(e) => handleFounderChange(index, 'imagePosition', e.target.value)}
                >
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </ImagePositionSelect>
              </FormGroup>

              <FormGroup>
                <Label>Social Links</Label>
                <SocialLinksContainer>
                  <FormGroup>
                    <Label>GitHub</Label>
                    <Input
                      type="url"
                      value={founder.social.github}
                      onChange={(e) => handleFounderChange(index, 'social.github', e.target.value)}
                      placeholder="https://github.com/username"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Portfolio</Label>
                    <Input
                      type="url"
                      value={founder.social.portfolio}
                      onChange={(e) => handleFounderChange(index, 'social.portfolio', e.target.value)}
                      placeholder="https://portfolio.com"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>LinkedIn</Label>
                    <Input
                      type="url"
                      value={founder.social.linkedin}
                      onChange={(e) => handleFounderChange(index, 'social.linkedin', e.target.value)}
                      placeholder="https://linkedin.com/in/username"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Instagram</Label>
                    <Input
                      type="url"
                      value={founder.social.instagram}
                      onChange={(e) => handleFounderChange(index, 'social.instagram', e.target.value)}
                      placeholder="https://instagram.com/username"
                    />
                  </FormGroup>
                </SocialLinksContainer>
              </FormGroup>
            </FounderCard>
          ))}

          <AddButton type="button" onClick={addFounder}>
            + Add Founder
          </AddButton>

          <Button type="submit" disabled={saving}>
            {saving ? 'Saving...' : 'Save All Changes'}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AboutManagement; 