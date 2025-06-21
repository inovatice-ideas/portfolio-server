import express from 'express';
import {
  getAllBlogs,
  addBlog,
  updateBlog,
  deleteBlog
} from '../controllers/blogController.js';

const router = express.Router();

// GET: Retrieve all blogs
router.get('/', getAllBlogs);

// POST: Add a new blog
router.post('/', addBlog);

// PUT: Update an existing blog by ID
router.put('/:id', updateBlog);

// DELETE: Remove a blog by ID
router.delete('/:id', deleteBlog);

export default router;
