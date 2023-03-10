"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const todoRouter_1 = __importDefault(require("./routes/todoRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use("/todo/api/", todoRouter_1.default);
app.use((err, req, res, next) => {
    console.log("An Error occured", err);
    res.status(404).json({
        message: "An error occured"
    });
});
exports.default = app;
