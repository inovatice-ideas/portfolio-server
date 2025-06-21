import express from 'express';
import {
  getAllProjects,
  addProject,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';

const router = express.Router();

// GET: Retrieve all projects
router.get('/', getAllProjects);

// POST: Add a new project
router.post('/', addProject);

// PUT: Update an existing project by ID
router.put('/:id', updateProject);

// DELETE: Remove a project by ID
router.delete('/:id', deleteProject);

export default router;
