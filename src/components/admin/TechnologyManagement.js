import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { updateAllTechnologies, fetchTechnologies, createTechnology } from '../../api';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-text);
`;

const TechList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const TechCard = styled.div`
  background: var(--color-bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  ${props => props.selected && `
    border-color: var(--color-primary);
    background: rgba(var(--color-primary-rgb), 0.05);
  `}
`;

const TechLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const TechInfo = styled.div`
  flex: 1;
`;

const TechName = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`;

const TechCategory = styled.span`
  font-size: 0.8rem;
  color: var(--color-text-light);
  background: var(--color-bg-tertiary);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  text-transform: capitalize;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const CategoryFilter = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: ${props => props.active ? 'var(--color-primary)' : 'var(--color-bg)'};
  color: ${props => props.active ? 'white' : 'var(--color-text)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const SelectedCount = styled.div`
  margin-bottom: 1rem;
  color: var(--color-text-light);
  font-size: 0.9rem;
`;

const SaveButton = styled.button`
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
  }

  &:disabled {
    background: var(--color-bg);
    color: var(--color-text-light);
    cursor: not-allowed;
    transform: none;
  }
`;

const Toast = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 2rem;
  background: ${props => props.type === 'success' ? 'var(--color-success)' : 'var(--color-error)'};
  color: white;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const InitializeButton = styled.button`
  background: var(--color-secondary);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 2rem;
  margin-left: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-secondary-dark);
    transform: translateY(-2px);
  }

  &:disabled {
    background: var(--color-bg);
    color: var(--color-text-light);
    cursor: not-allowed;
    transform: none;
  }
`;

const AddButton = styled.button`
  background: var(--color-success);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 2rem;
  margin-left: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-success-dark);
    transform: translateY(-2px);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: var(--color-bg);
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: var(--color-text);
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
  font-weight: 500;
  color: var(--color-text);
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: var(--color-bg-secondary);
  color: var(--color-text);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: var(--color-bg-secondary);
  color: var(--color-text);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const CancelButton = styled.button`
  background: var(--color-bg-secondary);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-bg-tertiary);
  }
`;

const SubmitButton = styled.button`
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-primary-dark);
  }
  
  &:disabled {
    background: var(--color-bg);
    color: var(--color-text-light);
    cursor: not-allowed;
  }
`;

const TechnologyManagement = () => {
  const [technologies, setTechnologies] = useState([]);
  const [filter, setFilter] = useState('all');
  const [hasChanges, setHasChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTechnology, setNewTechnology] = useState({
    name: '',
    logo: '',
    category: 'frontend',
    isSelected: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const categories = ['all', 'frontend', 'backend', 'database', 'design', 'devops', 'api'];

  useEffect(() => {
    fetchTechnologiesData();
  }, []);

  const fetchTechnologiesData = async () => {
    try {
      setIsLoading(true);
      const response = await fetchTechnologies();
      setTechnologies(response.data.technologies);
    } catch (error) {
      console.error('Error fetching technologies:', error);
      setToast({ 
        type: 'error', 
        message: 'Failed to fetch technologies. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleSelection = (techId) => {
    const updatedTechs = technologies.map(tech => 
      tech._id === techId ? { ...tech, isSelected: !tech.isSelected } : tech
    );
    setTechnologies(updatedTechs);
    setHasChanges(true);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await updateAllTechnologies(technologies);
      
      if (response.data.success) {
        setHasChanges(false);
        setToast({ 
          type: 'success', 
          message: response.data.message || 'Technologies saved successfully!' 
        });
        
        // Update local state with the saved data
        if (response.data.data && response.data.data.technologies) {
          setTechnologies(response.data.data.technologies);
        }
      } else {
        throw new Error(response.data.message || 'Failed to save technologies');
      }
    } catch (error) {
      console.error('Error saving technologies:', error);
      setToast({ 
        type: 'error', 
        message: error.response?.data?.message || 'Failed to save technologies. Please try again.' 
      });
    } finally {
      setIsSaving(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  const handleInitialize = async () => {
    if (!window.confirm('This will initialize the database with technologies from the JSON file. Continue?')) {
      return;
    }
    
    setIsInitializing(true);
    try {
      const response = await axios.post('/api/technologies/initialize');
      
      if (response.data.success) {
        setToast({ 
          type: 'success', 
          message: `Technologies initialized successfully! ${response.data.count} technologies added.` 
        });
        
        // Refresh the technologies list
        fetchTechnologiesData();
      } else {
        throw new Error(response.data.message || 'Failed to initialize technologies');
      }
    } catch (error) {
      console.error('Error initializing technologies:', error);
      setToast({ 
        type: 'error', 
        message: error.response?.data?.message || 'Failed to initialize technologies. Please try again.' 
      });
    } finally {
      setIsInitializing(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  const handleAddTechnology = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await createTechnology(newTechnology);
      
      if (response.data) {
        setToast({ 
          type: 'success', 
          message: 'Technology added successfully!' 
        });
        
        // Add the new technology to the list
        setTechnologies([...technologies, response.data]);
        
        // Reset form and close modal
        setNewTechnology({
          name: '',
          logo: '',
          category: 'frontend',
          isSelected: false
        });
        setShowAddModal(false);
      } else {
        throw new Error('Failed to add technology');
      }
    } catch (error) {
      console.error('Error adding technology:', error);
      setToast({ 
        type: 'error', 
        message: error.response?.data?.message || 'Failed to add technology. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTechnology({
      ...newTechnology,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const filteredTechnologies = filter === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === filter);

  const selectedCount = technologies.filter(tech => tech.isSelected).length;

  if (isLoading) {
    return (
      <Container>
        <Title>Technology Management</Title>
        <p>Loading technologies...</p>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Technology Management</Title>
      
      {toast && (
        <Toast type={toast.type}>
          {toast.message}
        </Toast>
      )}
      
      <SelectedCount>
        {selectedCount} technologies selected for display
      </SelectedCount>
      
      <CategoryFilter>
        {categories.map(category => (
          <FilterButton
            key={category}
            active={filter === category}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </FilterButton>
        ))}
      </CategoryFilter>

      <TechList>
        {filteredTechnologies.map(tech => (
          <TechCard key={tech._id} selected={tech.isSelected}>
            <TechLogo src={tech.logo} alt={tech.name} />
            <TechInfo>
              <TechName>{tech.name}</TechName>
              <TechCategory>{tech.category}</TechCategory>
            </TechInfo>
            <Checkbox
              type="checkbox"
              checked={tech.isSelected}
              onChange={() => handleToggleSelection(tech._id)}
            />
          </TechCard>
        ))}
      </TechList>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <SaveButton
          onClick={handleSave}
          disabled={!hasChanges || isSaving}
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </SaveButton>
        
        <AddButton onClick={() => setShowAddModal(true)}>
          Add Technology
        </AddButton>
        
        <InitializeButton
          onClick={handleInitialize}
          disabled={isInitializing || technologies.length > 0}
        >
          {isInitializing ? 'Initializing...' : 'Initialize from JSON'}
        </InitializeButton>
      </div>

      {showAddModal && (
        <Modal>
          <ModalContent>
            <ModalTitle>Add New Technology</ModalTitle>
            <Form onSubmit={handleAddTechnology}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={newTechnology.name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="logo">Logo URL</Label>
                <Input
                  type="url"
                  id="logo"
                  name="logo"
                  value={newTechnology.logo}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="category">Category</Label>
                <Select
                  id="category"
                  name="category"
                  value={newTechnology.category}
                  onChange={handleInputChange}
                  required
                >
                  {categories.filter(cat => cat !== 'all').map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label>
                  <Input
                    type="checkbox"
                    name="isSelected"
                    checked={newTechnology.isSelected}
                    onChange={handleInputChange}
                  />
                  Selected for display
                </Label>
              </FormGroup>
              
              <ButtonGroup>
                <CancelButton type="button" onClick={() => setShowAddModal(false)}>
                  Cancel
                </CancelButton>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Adding...' : 'Add Technology'}
                </SubmitButton>
              </ButtonGroup>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default TechnologyManagement; 