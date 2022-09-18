const Project = require("../models/project");

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    return res.json(200, {
      success: true,
      projects,
    });
  } catch (error) {
    return res.json(500, {
      message: error.message,
      success: false,
    });
  }
};

exports.postProject = async (req, res) => {
  try {
    const newProject = new Project({
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
    });
    await newProject.save();
    res.json(200, {
      message: "Project added succesfully",
      success: true,
    });
  } catch (error) {
    return res.json(500, {
      message: error,
      success: false,
    });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.json(400, {
        message: "Project doesnot exist",
        success: false,
      });
    }
    return res.json(200, {
      message: project,
      success: true,
    });
  } catch (error) {
    return res.json(500, {
      message: error.message,
      success: false,
    });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const project = await Project.findByIdAndUpdate(req.params.id, {
      title,
      description,
      link,
    });
    if (!project) {
      return res.json(400, {
        message: "Project doesnot exist",
        success: false,
      });
    }
    await project.save();
    return res.json(200, {
      message: project,
      success: true,
    });
  } catch (error) {
    return res.json(500, {
      message: error.message,
      success: false,
    });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    let project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.json(400, {
        message: "Project doesnot exist",
        success: false,
      });
    }
    return res.json(200, {
      message: "Project deleted",
      project,
      success: true,
    });
  } catch (error) {
    return res.json(500, {
      message: error.message,
      success: false,
    });
  }
};
