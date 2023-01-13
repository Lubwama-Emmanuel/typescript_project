"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.getTodos = exports.addTask = void 0;
const todoModel_1 = __importDefault(require("../models/todoModel"));
const addTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const task = req.body;
    const newTask = yield todoModel_1.default.create(task);
    res.status(201).json({
        status: "Success",
        message: "Created successfully----",
        data: newTask
    });
});
exports.addTask = addTask;
const getTodos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allTodos = yield todoModel_1.default.find({});
    res.status(200).json({
        status: 'success',
        todos: allTodos
    });
});
exports.getTodos = getTodos;
const updateTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const status = req.body;
    console.log("Here are the parameters", id, status);
    // const updateTask = await Todo.findByIdAndUpdate(id, )
    res.status(201).json({
        status: "Success",
        message: "Created successfully----",
    });
});
exports.updateTask = updateTask;
