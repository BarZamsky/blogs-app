import React, {useEffect, useState} from "react"
import axios from "axios";
import styles from './BlogsList.module.scss'
import {Box, Grid} from '@material-ui/core';
import { useHistory } from "react-router-dom";

const BlogsList = () => {
    const history = useHistory();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/blogs')
            .then(res => {
                setBlogs(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const onBlogClick = (id) => {
        history.push(`/blogs/${id}`)
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Blogs App</div>
            <div className={styles.blogs}>
                {blogs && blogs.length > 0 && blogs.map((blog, index) => (
                        <div className={styles.card} onClick={() => onBlogClick(blog.id)} key={blog.id}>
                            <img src={require(`../../../assets/images/${blog.imageId}`)}
                                 alt="card__image"
                                 className={styles.cardImage}
                                 width="600"
                                 height="200"
                            />
                            <div className={styles.cardBody}>
                                <span className={`${styles.tag} ${styles[blog.category]}`}>{blog.category}</span>
                                <h4>{blog.title}</h4>
                                <p>{blog.summary}</p>
                            </div>
                            <div className={styles.cardFooter}>
                                <div className={styles.userInfo}>
                                    <h5>{blog.author}</h5>
                                    <small>{blog.date}</small>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BlogsList;