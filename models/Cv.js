import mongoose from 'mongoose';

const cvSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  github_username: { type: String, required: true },
  repository_name: { type: String, required: true }
});

export default mongoose.model('CV', cvSchema);