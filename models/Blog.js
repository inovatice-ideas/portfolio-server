import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  blog: { type: String, required: true }
});

export default mongoose.model('Blog', blogSchema);