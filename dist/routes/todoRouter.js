"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = require("../controllers/todoController");
const route = express_1.default.Router();
route.get('/tasks', todoController_1.getTodos);
route.post('/tasks', todoController_1.addTask);
route.patch('/tasks/:id', todoController_1.updateTask);
exports.default = route;
