const Project = require('../models/project');
const projectsController = {};

projectsController.index = (req, res) => {
  Project.findAll(req.user.id)
    .then(projects => {
      res.json({
        message: 'data is in the house!',
        projects
      })
    })
    .catch(err => {
      console.log('problem at index controller', err);
      res.status(400).json({err})
    });
};

projectsController.new = (req, res) => {
  res.render('projects/new')
};

projectsController.create = (req, res) => {
    Project.create({
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      code_url: req.body.code_url,
      user_id: req.user.id
    })
    .then(project => {
      res.json({
        message: 'and there were projects'
        project
      })
    })
    .catch(err => {
      console.log('problem at project create controller', err);
      res.status(400).json(err);
    });
};

projectsController.show = (req, res) => {
  Project.findById(req.params.id)
  .then(projects => {
    res.json({projects})
  })
  .catch(err => {
    console.log('project show controller not working', err);
    res.status(400).json(err);
  });
};

projectsController.edit = (req, res) => {
  Project.findById(req.params.id)
    .then(projects => {
      res.json({projects})
    })
    .catch(err => {
      console.log('project edit controller not working', err);
      res.status(400).json(err)
    });
};

projectsController.update = (req,res) => {
  Project.update({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    code_url: req.body.code_url,
    user_id: req.user.id
  }, req.params.id)
  .then(projects => {
    res.json({projects})
  })
  .catch(err => {
    console.log('project update controller not working', err);
    res.status(400).json(err)
  });
};

projectsController.delete = (req,res) => {
  Project.delete(req.params.id)
  .then(project => {
    res.redirect('/')
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

module.exports = projectsController;
