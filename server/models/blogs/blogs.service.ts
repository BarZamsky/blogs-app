import {Blog} from "./blog.interface";
import {blogs} from "./blogsList";

export const findAll = async (): Promise<Blog[]> => {
    return blogs;
};

export const find = async (id: number): Promise<Blog> => {
    return blogs.find(blog => blog.id === id);
};

export const createNewBlog = async  (blog: Blog): Promise<number> => {
    const id = new Date().valueOf();
    blogs.push({
        id,
        ... blog
    })

    return id;
}

export const getBlogByCategory = async (category: string): Promise<Blog[]> => {
    const filteredArray = blogs.filter(blog => blog.category === category);
    return filteredArray;
}