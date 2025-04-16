const express = require('express');
const router = express.Router();
const Technology = require('../models/Technology');

// Get all technologies
router.get('/', async (req, res) => {
  try {
    const technologies = await Technology.find().sort({ category: 1, name: 1 });
    res.json({ technologies });
  } catch (error) {
    console.error('Error fetching technologies:', error);
    res.status(500).json({ error: 'Error reading technologies' });
  }
});

// Add new technology
router.post('/', async (req, res) => {
  try {
    const newTech = new Technology(req.body);
    await newTech.save();
    res.status(201).json(newTech);
  } catch (error) {
    console.error('Error adding technology:', error);
    res.status(500).json({ error: 'Error adding technology' });
  }
});

// Update technology selection status
router.patch('/:id', async (req, res) => {
  try {
    const updatedTech = await Technology.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedTech) {
      return res.status(404).json({ error: 'Technology not found' });
    }
    
    res.json(updatedTech);
  } catch (error) {
    console.error('Error updating technology:', error);
    res.status(500).json({ error: 'Error updating technology' });
  }
});

// Delete technology
router.delete('/:id', async (req, res) => {
  try {
    const deletedTech = await Technology.findByIdAndDelete(req.params.id);
    
    if (!deletedTech) {
      return res.status(404).json({ error: 'Technology not found' });
    }
    
    res.json({ message: 'Technology deleted successfully' });
  } catch (error) {
    console.error('Error deleting technology:', error);
    res.status(500).json({ error: 'Error deleting technology' });
  }
});

// Update all technologies
router.put('/', async (req, res) => {
  try {
    const { technologies } = req.body;
    
    if (!technologies || !Array.isArray(technologies)) {
      return res.status(400).json({ error: 'Invalid technologies data' });
    }
    
    // First, delete all existing technologies
    await Technology.deleteMany({});
    
    // Then insert all the new technologies
    const insertedTechs = await Technology.insertMany(technologies);
    
    res.json({ 
      success: true, 
      message: 'Technologies updated successfully', 
      data: { technologies: insertedTechs } 
    });
  } catch (error) {
    console.error('Error updating technologies:', error);
    res.status(500).json({ error: 'Error updating technologies' });
  }
});

// Initialize technologies from JSON file (one-time setup)
router.post('/initialize', async (req, res) => {
  try {
    const fs = require('fs');
    const path = require('path');
    const technologiesPath = path.join(__dirname, '../../src/data/technologies.json');
    
    // Check if technologies already exist in the database
    const count = await Technology.countDocuments();
    if (count > 0) {
      return res.status(400).json({ 
        error: 'Technologies already initialized. Use PUT / to update all technologies.' 
      });
    }
    
    // Read the JSON file
    const data = JSON.parse(fs.readFileSync(technologiesPath));
    
    // Insert all technologies into the database
    const insertedTechs = await Technology.insertMany(data.technologies);
    
    res.status(201).json({ 
      success: true, 
      message: 'Technologies initialized successfully', 
      count: insertedTechs.length 
    });
  } catch (error) {
    console.error('Error initializing technologies:', error);
    res.status(500).json({ error: 'Error initializing technologies' });
  }
});

module.exports = router; 