import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  designation: { type: String, required: true },
  timeline: { type: String, required: true },
  description: { type: String, required: true },
  techStack: { type: String, required: true },
});

export default mongoose.model('Experience', experienceSchema);