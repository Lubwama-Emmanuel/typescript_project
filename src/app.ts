import express, { NextFunction, Request, Response} from 'express';
import logger from 'morgan';
import route from './routes/todoRouter'

const app = express();

app.use(express.json())
app.use(logger('dev'))

app.use("/todo/api/", route)

app.use((err: Error ,req: Request, res: Response, next: NextFunction) => {
    console.log("An Error occured", err);
    res.status(404).json({
        message: "An error occured"
    })
})

export default app;