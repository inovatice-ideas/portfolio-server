import mongoose from 'mongoose';

const bioSchema = new mongoose.Schema({
  bio: { type: String, required: true }
});

export default mongoose.model('Bio', bioSchema);