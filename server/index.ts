import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
const blogsRouter = require('./routes/blogs.router');
const commentsRouter = require('./routes/comments.router');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogsRouter);
app.use('/api/comments', commentsRouter);

const PORT: number = parseInt(process.env.PORT as string);

app.listen(PORT, () => {
    console.log(`server is up and running on port ${PORT}`)
})