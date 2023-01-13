import mongoose from 'mongoose';

interface TodoFormat{
    task: string;
    status: string;
    createdAt: Date;
}

const todoSchema = new mongoose.Schema<TodoFormat>({
    task: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ['Done', 'Not Done'],
        default: 'Not Done'
    }
})

const Todo = mongoose.model('Todo', todoSchema)
export default Todo;