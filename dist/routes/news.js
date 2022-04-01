"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/** source/routes/news.ts */
const express_1 = __importDefault(require("express"));
const news_1 = __importDefault(require("../controllers/news"));
const router = express_1.default.Router();
router.get('/news', news_1.default.getNews);
module.exports = router;
