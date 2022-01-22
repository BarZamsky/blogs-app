import React from "react";
import styles from "./CommentsList.module.scss";
import CommentItem from "../CommentItem/CommentItem";

const CommentsList = ({ comments }) => (
    <ul className={styles.commentsList}>
        {comments.map((comment, index) => (
            <CommentItem comment={comment} index={index}/>
        ))}
    </ul>
)

export default CommentsList;