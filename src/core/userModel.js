import db from '../infra/database.js';

export const createUser = (name, email) => {
  const stmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
  const result = stmt.run(name, email);
  return { id: result.lastInsertRowid, name, email };
};

export const getUsers = () => {
  const stmt = db.prepare('SELECT * FROM users ORDER BY created_at DESC');
  return stmt.all();
};

export const getUserById = (id) => {
  const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
  return stmt.get(id);
};

export const updateUser = (id, name, email) => {
  const stmt = db.prepare('UPDATE users SET name = ?, email = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?');
  const result = stmt.run(name, email, id);
  return result.changes > 0;
};

export const deleteUser = (id) => {
  const stmt = db.prepare('DELETE FROM users WHERE id = ?');
  const result = stmt.run(id);
  return result.changes > 0;
};
