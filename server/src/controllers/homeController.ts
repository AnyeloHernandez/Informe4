import { Request, Response } from 'express';

class HomeController {
    index (req: Request, res: Response) {
        res.send('Home');
    }
}

export const homeController = new HomeController();
export default homeController;