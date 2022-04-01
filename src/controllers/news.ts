/** source/controllers/news.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Post {
    id: Number;
    title: String;
    url: String;
    img: String;
    created: Date;
}

// getting all news
const getNews = async (req: Request, res: Response, next: NextFunction) => {
    // get all news
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
    let posts: [Post] = result.data;
    return res.status(200).json({
        message: posts
    });
};

export default { getNews };