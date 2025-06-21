import Experience from '../models/Experience.js';

// GET: Fetch all experiences
export const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch experiences' });
  }
};

// POST: Add a new experience
export const addExperience = async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    const savedExperience = await newExperience.save();
    res.status(201).json({success: true, message: 'Experience added successfully', experience: savedExperience });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Failed to add experience' });
  }
};

// PUT: Update an existing experience by ID
export const updateExperience = async (req, res) => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(204).json({success: true, message: 'Experience updated successfully', experience: updatedExperience });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Failed to update experience' });
  }
};

// DELETE: Remove a experience by ID
export const deleteExperience = async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.status(204).json({ success: true, message: 'Experience deleted successfully' });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Failed to delete experience' });
  }
};
