import React from "react";
import moment from "moment";
import styles from "./CommentItem.module.scss";

const CommentItem = ({ index, comment }) => (
    <div className={styles.listItem} key={index}>
        <li>
            <span>{comment.content}</span>
        </li>
        <div className={styles.footer}>
            <li>Written by {comment.author} at {moment(comment.date).format('DD/MM/YYYY')}</li>
        </div>
    </div>
)

export default CommentItem;