import express from 'express';
import axios from 'axios';
import CV from '../models/Cv.js';
import { getAllCvs, addCv, updateCv, deleteCv } from '../controllers/cvController.js';

const router = express.Router();

// CRUD routes
router.get('/', getAllCvs);
router.post('/', addCv);
router.put('/:id', updateCv);
router.delete('/:id', deleteCv);

// ✅ Serve CV from GitHub via DB lookup
router.get('/view/:type', async (req, res) => {
  const { type } = req.params;

  try {
    const cv = await CV.findOne({ type: type.toLowerCase() });

    if (!cv) return res.status(404).json({ error: 'CV not found for type: ' + type });

    const fileUrl = `https://github.com/${cv.github_username}/${cv.repository_name}/releases/latest/download/main.pdf`;

    const response = await axios.get(fileUrl, { responseType: 'stream' });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="${type}-cv.pdf"`);

    response.data.pipe(res);
  } catch (err) {
    console.error('Error serving PDF:', err.message);
    res.status(500).json({ error: 'Failed to load CV PDF' });
  }
});

export default router;