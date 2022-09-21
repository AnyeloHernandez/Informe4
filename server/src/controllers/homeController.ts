import { Request, Response } from 'express';

class HomeController {
//  Metodos para las publicaciones
    public list (req: Request, res: Response) {
        res.send('obteniendo publicaciones'); // Este obtiene todas las publicaciones
    }

    public getPublicacion(req: Request, res: Response){
        res.json({text: 'Publicacion: ' + req.params.id})
    }

    public create (req: Request, res: Response) {
        res.json({text: 'creando una publicacion'});
    }

    public delete(req: Request, res: Response){
        res.json({text: 'eliminando una publicacion: ' + req.params.id});
    }

    public update(req: Request, res: Response){
        res.json({text: 'actualizando una publicacion: ' + req.params.id});
    }
}


export const homeController = new HomeController();
export default homeController;