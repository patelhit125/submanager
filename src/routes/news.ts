/** source/routes/news.ts */
import express from 'express';
import controller from '../controllers/news';
const router = express.Router();

router.get('/news', controller.getNews);

export = router;