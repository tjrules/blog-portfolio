\c new_blog_app

DROP TABLE IF EXISTS projects;

CREATE TABLE IF NOT EXISTS projects(
  id BIGSERIAL PRIMARY KEY,
  title TEXT,
  description TEXT,
  img_url TEXT,
  code_url TEXT,
  user_id INTEGER REFERENCES users(id)
);
