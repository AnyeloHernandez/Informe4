import { Router } from 'express';
import { homeController } from '../controllers/homeController';
class HomeRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', homeController.list); // Obtiene una publicacion
        this.router.get('/publicacion/:id', homeController.getPublicacion); // Obtiene UNA publicacion
        this.router.post('/', homeController.create); // Crea una nueva publicacion
        this.router.delete('/publicacion/:id', homeController.delete); // Elimina una publicacion
        this.router.put('/publicacion/:id', homeController.update); // Actualiza una publicacion
        this.router.get('/search=:curso', homeController.SearchQuery); // Obtiene la busqueda
    }

}

const homeRoutes = new HomeRoutes();
export default homeRoutes.router;