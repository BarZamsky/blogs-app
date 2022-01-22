import express from "express";
const router = express.Router();
const commentsController = require('../controllers/comments.controller');

router.post('/', commentsController.addComment);

module.exports = router;
