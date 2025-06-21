import CV from '../models/Cv.js';

// GET: Fetch all projects
export const getAllCvs = async (req, res) => {
  try {
    const cvs = await CV.find();
    res.status(200).json(cvs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cvs' });
  }
};

// POST: Add a new project
export const addCv = async (req, res) => {
  try {
    const newCv = new CV(req.body);
    const savedCv = await newCv.save();
    res.status(201).json({success: true, message: 'Cv added successfully', cv: savedCv });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Failed to add cv' });
  }
};

// PUT: Update an existing project by ID
export const updateCv = async (req, res) => {
  try {
    const updatedCv = await CV.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(204).json({success: true, message: 'Cv updated successfully', cv: updatedCv });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Failed to update cv' });
  }
};

// DELETE: Remove a project by ID
export const deleteCv = async (req, res) => {
  try {
    await CV.findByIdAndDelete(req.params.id);
    res.status(204).json({ success: true, message: 'Cv deleted successfully' });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Failed to delete cv' });
  }
};