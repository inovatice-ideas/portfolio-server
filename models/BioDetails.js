import mongoose from 'mongoose';

const bioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  designations: {
    type: [String],
    default: []
  },
  socialMedia: {
    github: String,
    linkedin: String,
    twitter: String,
    instagram: String,
    facebook: String,
    gmail: String,
    scholar: String
  },
  orcid: {
    type: String,
    required: true
  }
});

const BioDetails = mongoose.model('BioDetails', bioSchema);
export default BioDetails;
