import Todo from '../models/todoModel';
import { RequestHandler } from 'express';

export const addTask:RequestHandler = async (req, res, next) => {
    const task = req.body

    const newTask = await Todo.create(task)
    res.status(201).json({
        status: "Success",
        message: "Created successfully----",
        data: newTask
    })
}

export const getTodos:RequestHandler = async(req, res, next) => {
    const allTodos = await Todo.find({});

    res.status(200).json({
        status: 'success',
        todos: allTodos
    })
}

export const updateTask:RequestHandler = async (req, res, next) => {
    const id = req.params.id;
    const status = req.body
    console.log("Here are the parameters", id, status)
    // const updateTask = await Todo.findByIdAndUpdate(id, )

    res.status(201).json({
        status: "Success",
        message: "Created successfully----",
    })
}