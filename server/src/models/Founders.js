const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
  github: {
    type: String,
    trim: true
  },
  portfolio: {
    type: String,
    trim: true
  },
  linkedin: {
    type: String,
    trim: true
  },
  instagram: {
    type: String,
    trim: true
  }
});

const founderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  imagePosition: {
    type: String,
    enum: ['left', 'right'],
    default: 'left'
  },
  social: socialSchema
});

const foundersSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    default: 'Meet Our Team'
  },
  founders: [founderSchema],
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Ensure there's only one founders document
foundersSchema.pre('save', async function(next) {
  if (this.isNew) {
    const count = await this.constructor.countDocuments();
    if (count > 0) {
      throw new Error('Only one founders document can exist');
    }
  }
  next();
});

// Add a method to update the founders document
foundersSchema.statics.updateFounders = async function(updateData) {
  console.log('updateFounders method called with:', updateData);
  
  try {
    // Find the existing founders document
    let founders = await this.findOne();
    
    if (!founders) {
      console.log('No existing founders document found, creating new one');
      founders = new this(updateData);
    } else {
      console.log('Updating existing founders document');
      // Update the fields
      founders.title = updateData.title;
      founders.founders = updateData.founders;
      founders.updatedAt = Date.now();
    }
    
    // Save the document
    console.log('Saving founders document:', founders);
    await founders.save();
    console.log('Founders document saved successfully');
    
    return founders;
  } catch (error) {
    console.error('Error in updateFounders method:', error);
    throw error;
  }
};

const Founders = mongoose.model('Founders', foundersSchema);

module.exports = Founders; 