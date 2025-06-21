import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  timeline: { type: String, required: true },
  description: { type: String, required: true },
  techStack: { type: String, required: true },
  link: { type: String, required: false } // optional field
});

export default mongoose.model('Project', projectSchema);
