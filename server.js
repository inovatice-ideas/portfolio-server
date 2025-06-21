// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import projectRoutes from './routes/projectRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import publicationRoutes from './routes/publicationRoutes.js';
import bioRoutes from './routes/bioRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import bioDetailsRoutes from './routes/bioDetailsRoutes.js';
import cvRoutes from './routes/cvRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.get('/', (req, res) => {
  res.send('Server is running');
});
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/publications', publicationRoutes);
app.use('/api/bio', bioRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/bioDetails', bioDetailsRoutes);
app.use('/api/cv', cvRoutes);

// Root route for browser testing
app.get('/', (req, res) => {
  res.send('🚀 Portfolio Backend Server Running');
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('❌ MongoDB connection failed:', err.message);
});