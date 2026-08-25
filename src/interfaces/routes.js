import express from 'express';
import {
  createUserHandler,
  getUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
} from './userController.js';

const router = express.Router();

router.post('/users', express.json(), createUserHandler);
router.get('/users', getUsersHandler);
router.get('/users/:id', getUserByIdHandler);
router.put('/users/:id', express.json(), updateUserHandler);
router.delete('/users/:id', deleteUserHandler);

export default router;
