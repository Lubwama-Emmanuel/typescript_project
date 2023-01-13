import express from 'express';
import {getTodos, addTask, updateTask} from '../controllers/todoController'
const route = express.Router();

route.get('/tasks', getTodos)
route.post('/tasks', addTask)
route.patch('/tasks/:id', updateTask)

export default route;