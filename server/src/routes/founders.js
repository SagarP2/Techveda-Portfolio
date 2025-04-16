const express = require('express');
const router = express.Router();
const Founders = require('../models/Founders');
const { auth, isAdmin } = require('../middleware/auth');

// @route   GET /api/founders
// @desc    Get founders content
// @access  Public
router.get('/', async (req, res) => {
  try {
    console.log('GET /api/founders - Fetching founders content');
    let founders = await Founders.findOne();
    
    // If no founders content exists, create default content
    if (!founders) {
      console.log('No founders content found, creating default content');
      founders = new Founders({
        title: 'Meet Our Team',
        founders: [
          {
            name: 'John Smith',
            bio: 'Founder & CEO with over 10 years of experience in software development and team leadership. Passionate about creating innovative solutions that make a difference.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            imagePosition: 'left',
            social: {
              github: 'https://github.com',
              portfolio: 'https://portfolio.com',
              linkedin: 'https://linkedin.com',
              instagram: 'https://instagram.com'
            }
          }
        ]
      });
      
      try {
        await founders.save();
        console.log('Default founders content created successfully');
      } catch (saveError) {
        console.error('Error saving default founders content:', saveError);
        return res.status(500).json({ 
          message: 'Error creating default founders content',
          error: process.env.NODE_ENV === 'development' ? saveError.message : undefined
        });
      }
    }
    
    console.log('Sending founders content:', founders);
    res.json(founders);
  } catch (err) {
    console.error('Error in GET /api/founders:', err);
    res.status(500).json({ 
      message: 'Server Error',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

// @route   PUT /api/founders
// @desc    Update founders content
// @access  Admin
router.put('/', [auth, isAdmin], async (req, res) => {
  try {
    console.log('PUT /api/founders - Updating founders content');
    console.log('Request body:', req.body);
    
    const { title, founders } = req.body;
    
    // Validate required fields
    if (!title || typeof title !== 'string') {
      return res.status(400).json({ message: 'Title is required and must be a string' });
    }
    
    if (!Array.isArray(founders)) {
      return res.status(400).json({ message: 'Founders must be an array' });
    }
    
    // Validate each founder
    for (const founder of founders) {
      if (!founder.name || typeof founder.name !== 'string' || !founder.name.trim()) {
        return res.status(400).json({ message: 'Each founder must have a valid name' });
      }
      
      if (!founder.bio || typeof founder.bio !== 'string' || !founder.bio.trim()) {
        return res.status(400).json({ message: 'Each founder must have a valid bio' });
      }
      
      if (!founder.image || typeof founder.image !== 'string' || !founder.image.trim()) {
        return res.status(400).json({ message: 'Each founder must have a valid image URL' });
      }
      
      if (founder.imagePosition && !['left', 'right'].includes(founder.imagePosition)) {
        return res.status(400).json({ message: 'Image position must be either "left" or "right"' });
      }
      
      // Validate social links if provided
      if (founder.social) {
        const validSocialFields = ['github', 'portfolio', 'linkedin', 'instagram'];
        const socialFields = Object.keys(founder.social);
        
        for (const field of socialFields) {
          if (!validSocialFields.includes(field)) {
            return res.status(400).json({ message: `Invalid social field: ${field}` });
          }
          
          if (founder.social[field] && typeof founder.social[field] !== 'string') {
            return res.status(400).json({ message: `Social link for ${field} must be a string` });
          }
        }
      }
    }
    
    // Find the existing founders document
    let foundersDoc = await Founders.findOne();
    
    if (!foundersDoc) {
      console.log('No founders document found, creating new one');
      foundersDoc = new Founders();
    }
    
    // Update the fields
    foundersDoc.title = title.trim();
    foundersDoc.founders = founders.map(founder => ({
      ...founder,
      name: founder.name.trim(),
      bio: founder.bio.trim(),
      image: founder.image.trim(),
      imagePosition: founder.imagePosition || 'left',
      social: founder.social || {}
    }));
    foundersDoc.updatedAt = Date.now();
    
    try {
      await foundersDoc.save();
      console.log('Founders content updated successfully');
      res.json(foundersDoc);
    } catch (saveError) {
      console.error('Error saving founders content:', saveError);
      if (saveError.name === 'ValidationError') {
        return res.status(400).json({ 
          message: 'Validation error',
          errors: Object.values(saveError.errors).map(err => err.message)
        });
      }
      throw saveError;
    }
  } catch (err) {
    console.error('Error in PUT /api/founders:', err);
    if (err.message === 'Only one founders document can exist') {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ 
      message: 'Server Error',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

module.exports = router; 