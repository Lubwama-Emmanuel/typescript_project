import app from './app';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 4000;
const DB = process.env.DATABASE_URL.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.set('strictQuery', false).connect(DB).then(con => {
    console.log("Database connected successfully-----")
}).catch(err => {
    console.log("Oooooops database not connected----")
})

app.listen(port, () => {
    console.log(`----Server running on port: ${port}`)
})
