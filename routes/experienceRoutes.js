import express from 'express';
import {
  getAllExperiences,
  addExperience,
  updateExperience,
  deleteExperience
} from '../controllers/experienceController.js';

const router = express.Router();

// GET: Retrieve all experiences
router.get('/', getAllExperiences);

// POST: Add a new experience
router.post('/', addExperience);

// PUT: Update an existing experience by ID
router.put('/:id', updateExperience);

// DELETE: Remove an experience by ID
router.delete('/:id', deleteExperience);

export default router;
