import * as bodyParser from 'body-parser';
import {Router} from 'express';

export function apiRouter() {
    const router = Router();
    router.use(bodyParser.json());
    router.get('/api/podcast_search', (_req, res) => {
        res.json({a: 'Yey', b: 434});
    });
    return router;
}
