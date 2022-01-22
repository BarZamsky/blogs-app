import { Request, Response } from "express";
import * as commentsService from '../models/comments/comments.service';
import { Comment } from "../models/comments/comment.interface";

const addComment = async (req: Request, res: Response) => {
    try {
        const comment: Comment = req.body;
        await commentsService.addComment(comment);
        res.status(200).end();
    } catch (err) {
        res.status(500).send(err && err.message);
    }
};

const editComment = async (req: Request, res: Response) => {
    // const id:number, content: string = req.body;
    // await commentsService.editComment(id, content);
}

module.exports = {
    addComment
};