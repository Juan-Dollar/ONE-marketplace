import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true
  },
  password: { 
    type: String, 
    required: true 
  },
  userType: { 
    type: String, 
    enum: ['worker', 'client'], 
    required: true 
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    default: ''
  },
  profileImage: {
    type: String,
    default: 'https://via.placeholder.com/150'
  },
  coverImage: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    default: ''
  },
  skills: [{
    type: String
  }],
  experience: {
    type: Number,
    default: 0
  },
  hourlyRate: {
    type: Number,
    default: 0
  },
  rating: { 
    type: Number, 
    default: 0,
    min: 0,
    max: 5
  },
  totalReviews: { 
    type: Number, 
    default: 0 
  },
  isVerified: { 
    type: Boolean, 
    default: false 
  },
  subscription: {
    plan: { 
      type: String, 
      enum: ['free', 'pro', 'premium'], 
      default: 'free' 
    },
    expiresAt: Date,
    active: { 
      type: Boolean, 
      default: false 
    }
  },
  backgroundCheckStatus: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'], 
    default: 'pending' 
  },
  backgroundCheckFile: String,
  walletBalance: { 
    type: Number, 
    default: 0 
  },
  bankAccount: {
    accountHolder: String,
    accountNumber: String,
    routingNumber: String
  },
  portfolio: [{
    title: String,
    description: String,
    image: String,
    link: String
  }],
  badges: [{
    name: String,
    icon: String,
    earnedAt: Date
  }],
  availability: {
    available: Boolean,
    nextAvailable: Date
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

export default mongoose.model('User', userSchema);
