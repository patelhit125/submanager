"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const news_1 = __importDefault(require("./routes/news"));
class App {
    constructor() {
        this.router = (0, express_1.default)();
        /** Logging */
        this.router.use((0, morgan_1.default)('dev'));
        /** Parse the request */
        this.router.use(express_1.default.urlencoded({ extended: false }));
        /** Takes care of JSON data */
        this.router.use(express_1.default.json());
        /** RULES OF OUR API */
        this.router.use((req, res, next) => {
            // set the CORS policy
            res.header('Access-Control-Allow-Origin', '*');
            // set the CORS headers
            res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
            // set the CORS method headers
            if (req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
                return res.status(200).json({});
            }
            next();
        });
        /** Routes */
        this.router.use('/', news_1.default);
        /** Error handling */
        this.router.use((req, res, next) => {
            const error = new Error('not found');
            return res.status(404).json({
                message: error.message
            });
        });
        /** Server */
        // const httpServer = http.createServer(this.router);
        const PORT = process.env.PORT || 3000;
        // httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
        this.router.listen(process.env.PORT || 3000, function () {
            console.log("Express server listening on port %d", PORT);
        });
    }
}
exports.App = App;
