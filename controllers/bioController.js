import Bio from '../models/Bio.js';

// GET: Fetch the single bio entry
export const getBio = async (req, res) => {
  try {
    const bio = await Bio.findOne();
    res.json(bio);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bio' });
  }
};

// PUT or POST: Update if exists, else create new bio
export const updateBio = async (req, res) => {
  try {
    const existing = await Bio.findOne();

    if (existing) {
      existing.bio = req.body.bio;
      const updatedBio = await existing.save();
      return res.json(updatedBio);
    } else {
      const newBio = new Bio(req.body);
      const savedBio = await newBio.save();
      return res.status(201).json(savedBio);
    }
  } catch (err) {
    res.status(400).json({ error: 'Failed to update or create bio' });
  }
};
