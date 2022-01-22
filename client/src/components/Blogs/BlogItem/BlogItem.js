import React, {useEffect, useState} from "react";
import axios from 'axios';
import styles from './BlogItem.module.scss';
import {withRouter} from "react-router-dom";
import moment from "moment";
import CommentsList from "../../Comments/CommentsList";

const BlogItem = ({ match }) => {
    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showComment, setShowComment] = useState(false);
    const [comment, setComment] = useState('');

    const fetchComments = (id) => {
        axios.get(`http://localhost:5000/api/blogs/${id}`)
            .then(res => {
                console.log(res)
                setBlog(res.data)
                setLoading(false)
                axios.get(`http://localhost:5000/api/blogs/${id}/comments`)
                    .then(res => {
                        setComments(res.data)
                    })
            })
            .catch(e => console.log(e && e.message))
    }

    useEffect(() => {
        const id = match.params.id;
        fetchComments(id);
    }, [])

    const onChangeHandler = (e) => { setComment(e.target.value)}

    const onClickHandler = (e) => {
        const body = {
            blogId: Number(match.params.id),
            author: 'Israel Israeli',
            content: comment,
            date: new Date()
        }

        axios.post('http://localhost:5000/api/comments', body)
            .then(res => {
                setShowComment(false)
                setComment('')
                fetchComments(match.params.id);
            })
            .catch(e => console.log(e && e.message))
    }

    return (
        !loading && (
            <div className={styles.container}>
                <div className={styles.main}>
                    <img src={require(`../../../assets/images/${blog.imageId}`)} width="600" height="300" style={{objectFit:"cover"}}/>
                    <h1>{blog.title}</h1>
                    <div className={styles.info}>Posted on: {blog.date} by {blog.author}</div><br/><br/>
                    <div className={styles.summary}>{blog.summary}</div><br/>
                    <div className={styles.summary}>{blog.content}</div>
                    <div className={styles.comments}>
                        <div style={{display:"flex", justifyContent:'space-between'}}>
                            <h2>Comments</h2>
                            <button className={styles.addBtn}
                                    onClick={() => setShowComment(true)}
                            >
                                Write a comment
                            </button>
                        </div>
                        {showComment && (
                            <>
                                <textarea className={styles.newComment}
                                          placeholder="Write your comment..."
                                          onChange={onChangeHandler}
                                          value={comment}
                                />
                                <button onClick={onClickHandler}
                                        className={styles.addBtn}
                                >
                                    Post your comment
                                </button>
                            </>
                        )}
                        <CommentsList comments={comments}/>
                    </div>
                </div>
            </div>
        )
    )
}

export default withRouter(BlogItem);