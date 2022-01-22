import { Comment } from "./comment.interface";
import { comments } from "./commentsList";

export const findByBlogId = async (id: number): Promise<Comment[]> => {
    const filteredArray = comments.filter(comment => comment.blogId === id);
    return filteredArray;
};

export const editComment = async (id: number, content: string): Promise<Comment> => {
    const copyOfComment = comments.find(comment => comment.id === id);
    if (!copyOfComment) {
        return null;
    }

    const comment = copyOfComment[0];
    comment.content = content;
    comment.date = new Date();
    return comment;
}

export const addComment = async  (comment: Comment): Promise<number> => {
    const id = new Date().valueOf();
    comments.push({
        id,
        ... comment
    })

    return id;
}