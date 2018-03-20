const db = require('../db/config');

const Project = {};

Project.findAll = id => {
  return db.query(`
    SELECT *, projects.id FROM projects
    JOIN users ON projects.user_id = users.id
    WHERE users.id = $1
  `, id)
};

Project.findById = id => {
  return db.oneOrNone(`SELECT * FROM projects WHERE id = $1`, [id]);
};

Project.create = (projects) => {
  return db.one(
    `
      INSERT INTO projects
      (title, description, img_url, code_url, user_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURN *
      `,
      [projects.title, projects.description, projects.image_url, projects.code_url, projects.user_id]
  );
};

Project.update = (projects, id) => {
  return db.oneOrNone(
    `
      UPDATE posts SET
      title = $1,
      description = $2,
      img_url = $3,
      code_url = $4,
      user_id = 5$
      WHERE id = $4
      RETURNING *
    `,
    [projects.title, projects.description, projects.image_url, projects.code_url, projects.user_id]
  );
};

Project.delete = id => {
  return db.none(
    `
      DELETE FROM projects
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Project;
