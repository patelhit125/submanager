/** source/server.ts */
import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './routes/news';

export class App{
    protected router: Express = express();

    constructor() {
        /** Logging */
        this.router.use(morgan('dev'));
        /** Parse the request */
        this.router.use(express.urlencoded({ extended: false }));
        /** Takes care of JSON data */
        this.router.use(express.json());

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
        this.router.use('/', routes);

        /** Error handling */
        this.router.use((req, res, next) => {
            const error = new Error('not found');
            return res.status(404).json({
                message: error.message
            });
        });

        /** Server */
        // const httpServer = http.createServer(this.router);
        const PORT: any = process.env.PORT || 3000;
        // httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
        this.router.listen(process.env.PORT || 3000, function(){
            console.log("Express server listening on port %d", PORT);
        });
    }
}