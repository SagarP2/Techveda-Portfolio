import API from './index';

// Get all technologies
export const fetchTechnologies = () => API.get('/api/technologies');

// Add new technology
export const createTechnology = (newTechnology) => API.post('/api/technologies', newTechnology);

// Update technology selection status
export const updateTechnology = (id, updatedTechnology) => API.patch(`/api/technologies/${id}`, updatedTechnology);

// Delete technology
export const deleteTechnology = (id) => API.delete(`/api/technologies/${id}`);

// Update all technologies
export const updateAllTechnologies = (technologies) => API.put('/api/technologies', { technologies });

// Initialize technologies from JSON file
export const initializeTechnologies = () => API.post('/api/technologies/initialize'); 