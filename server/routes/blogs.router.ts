import express from "express";
const router = express.Router();
const blogsController = require('../controllers/blogs.controller');

router.post('/', blogsController.createBlog);
router.get('/:id', blogsController.getBlog);
router.get('/:id/comments', blogsController.getCommentsByBlogId);
router.get('/category/:category', blogsController.getBlogByCategory);
router.get('/', blogsController.getBlogs);

module.exports = router;
