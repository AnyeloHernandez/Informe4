import { Router } from 'express';
import { indexController } from '../controllers/indexController';

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.list); // Obtiene TODOS login
        this.router.delete('/:id', indexController.delete); // Elimina un usuario
        this.router.post('/', indexController.create); // Crea un usuario
        this.router.put('/:id', indexController.update); // Actualiza un usuario
        this.router.get('/:id', indexController.getLogin); // Obtiene UN login
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;