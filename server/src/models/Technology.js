const mongoose = require('mongoose');

const technologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Technology name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  logo: {
    type: String,
    required: [true, 'Technology logo is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Technology category is required'],
    trim: true,
    enum: ['frontend', 'backend', 'database', 'design', 'devops', 'api']
  },
  isSelected: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
technologySchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Add text index for search functionality
technologySchema.index({ name: 'text', category: 'text' });

const Technology = mongoose.model('Technology', technologySchema);

module.exports = Technology; 