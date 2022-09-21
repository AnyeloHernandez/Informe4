import { Request, Response } from 'express';
import pool from '../database';

class IndexController {
    public index (req: Request, res: Response) {
        pool.query('DESCRIBE login');
        res.json('login')
    }
}

export const indexController = new IndexController();