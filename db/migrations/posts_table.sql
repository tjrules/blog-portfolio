\c new_blog_app

DROP TABLE IF EXISTS posts;

CREATE TABLE IF NOT EXISTS posts(
  id BIGSERIAL PRIMARY KEY,
  title TEXT,
  content TEXT,
  user_id INTEGER REFERENCES users(id)
)
