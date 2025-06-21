import Project from '../models/Project.js';

// GET: Fetch all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

// POST: Add a new project
export const addProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json({success: true, message: 'Project added successfully', project: savedProject });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Failed to add project' });
  }
};

// PUT: Update an existing project by ID
export const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(204).json({success: true, message: 'Project updated successfully', project: updatedProject });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Failed to update project' });
  }
};

// DELETE: Remove a project by ID
export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(204).json({ success: true, message: 'Project deleted successfully' });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Failed to delete project' });
  }
};