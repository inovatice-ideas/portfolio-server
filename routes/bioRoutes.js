import express from 'express';
import {
  getBio,
  updateBio
} from '../controllers/bioController.js';

const router = express.Router();

// GET: Retrieve the bio
router.get('/', getBio);

// POST: Create or update the bio
router.post('/', updateBio);

export default router;
