import { Request, Response } from "express";
import * as blogsService from '../models/blogs/blogs.service';
import { Blog } from "../models/blogs/blog.interface";
import * as commentsService from "../models/comments/comments.service";

const createBlog = async (req: Request, res: Response) => {
    try {
        const blog: Blog = req.body;
        const newBlogId = await blogsService.createNewBlog(blog);
        res.status(200).send(newBlogId);
    } catch (err) {
        res.status(500).send(err && err.message);
    }
};

const getBlogs = async (req: Request, res: Response) => {
    try {
        const blogs = await blogsService.findAll();
        res.status(200).send(blogs);
    } catch (err) {
        res.status(500).send(err && err.message);
    }
};

const getCommentsByBlogId = async (req: Request, res: Response) => {
    try {
        const blogId: number = Number(req.params.id);
        const comments = await commentsService.findByBlogId(blogId);
        res.status(200).send(comments);
    } catch (err) {
        res.status(500).send(err && err.message);
    }
};

const getBlogByCategory = async (req: Request, res: Response) => {
    try {
        const category: string = req.params.category;
        const blog = await blogsService.getBlogByCategory(category);
        res.status(200).send(blog);
    } catch (err) {
        res.status(500).send(err && err.message);
    }
}

const getBlog = async (req: Request, res: Response) => {
    try {
        const blogId: number = Number(req.params.id);
        const blog = await blogsService.find(blogId);
        res.status(200).send(blog);
    } catch (err) {
        res.status(500).send(err && err.message);
    }
}

module.exports = {
    getBlog,
    createBlog,
    getBlogs,
    getCommentsByBlogId,
    getBlogByCategory
};