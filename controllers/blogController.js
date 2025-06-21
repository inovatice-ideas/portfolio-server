import Blog from '../models/Blog.js';

// GET: Fetch all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

// POST: Add a new blog
export const addBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json({success: true, message: 'Blog added successfully', blog: savedBlog });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Failed to add blog' });
  }
};

// PUT: Update an existing blog by ID
export const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(204).json({success: true, message: 'Blog updated successfully', blog: updatedBlog });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Failed to update blog' });
  }
};

// DELETE: Remove a blog by ID
export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(204).json({ success: true, message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Failed to delete blog' });
  }
};
