import express from 'express';
import {getTodos, addTask, updateTask, getTask} from '../controllers/todoController'
const route = express.Router();

route.get('/tasks', getTodos)
route.post('/tasks', addTask)
route.patch('/tasks/:id', updateTask)
route.get('/tasks/:id', getTask)

export default route;