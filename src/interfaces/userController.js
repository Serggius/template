import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../core/userModel.js';

export const createUserHandler = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios' });
  }

  if (!email.includes('@')) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  try {
    const user = createUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    if (error.message.includes('UNIQUE constraint failed')) {
      res.status(409).json({ error: 'Email já cadastrado' });
    } else {
      res.status(500).json({ error: 'Erro ao criar utilizador' });
    }
  }
};

export const getUsersHandler = (req, res) => {
  try {
    const users = getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar utilizadores' });
  }
};

export const getUserByIdHandler = (req, res) => {
  const { id } = req.params;

  try {
    const user = getUserById(id);
    if (!user) {
      return res.status(404).json({ error: 'Utilizador não encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar utilizador' });
  }
};

export const updateUserHandler = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios' });
  }

  if (!email.includes('@')) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  try {
    const updated = updateUser(id, name, email);
    if (!updated) {
      return res.status(404).json({ error: 'Utilizador não encontrado' });
    }
    res.json({ message: 'Utilizador atualizado com sucesso' });
  } catch (error) {
    if (error.message.includes('UNIQUE constraint failed')) {
      res.status(409).json({ error: 'Email já cadastrado' });
    } else {
      res.status(500).json({ error: 'Erro ao atualizar utilizador' });
    }
  }
};

export const deleteUserHandler = (req, res) => {
  const { id } = req.params;

  try {
    const deleted = deleteUser(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Utilizador não encontrado' });
    }
    res.json({ message: 'Utilizador removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover utilizador' });
  }
};
