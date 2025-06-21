import express from 'express';
import BioDetails from '../models/BioDetails.js';

const router = express.Router();

// GET the first bioDetails document
router.get('/', async (req, res) => {
  try {
    const bioDetails = await BioDetails.findOne(); // Assuming only one document exists
    res.json(bioDetails);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching bio', error: err });
  }
});

export default router;
