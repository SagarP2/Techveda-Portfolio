import technologies from '../../data/technologies.json';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Return all technologies
    res.status(200).json(technologies);
  } else if (req.method === 'PUT') {
    try {
      const { technologies: updatedTechnologies } = req.body;
      
      if (!updatedTechnologies || !Array.isArray(updatedTechnologies)) {
        return res.status(400).json({ 
          error: 'Invalid request body',
          message: 'Technologies array is required'
        });
      }

      // Validate each technology object
      const isValid = updatedTechnologies.every(tech => 
        tech.id && 
        tech.name && 
        tech.logo && 
        tech.category && 
        typeof tech.isSelected === 'boolean'
      );

      if (!isValid) {
        return res.status(400).json({ 
          error: 'Invalid technology data',
          message: 'Each technology must have id, name, logo, category, and isSelected fields'
        });
      }
      
      // Get the absolute path to the technologies.json file
      const filePath = path.join(process.cwd(), 'src/data/technologies.json');
      
      // Write the updated data to the file
      fs.writeFileSync(filePath, JSON.stringify({ technologies: updatedTechnologies }, null, 2), 'utf8');
      
      // Return success response
      res.status(200).json({ 
        success: true,
        message: 'Technologies updated successfully',
        data: { technologies: updatedTechnologies }
      });
    } catch (error) {
      console.error('Error saving technologies:', error);
      res.status(500).json({ 
        error: 'Failed to save technologies',
        message: error.message,
        details: process.env.NODE_ENV === 'development' ? error : undefined
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 