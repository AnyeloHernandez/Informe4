"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeController = void 0;
class HomeController {
    //  Metodos para las publicaciones
    list(req, res) {
        res.send('obteniendo publicaciones'); // Este obtiene todas las publicaciones
    }
    getPublicacion(req, res) {
        res.json({ text: 'Publicacion: ' + req.params.id });
    }
    create(req, res) {
        res.json({ text: 'creando una publicacion' });
    }
    delete(req, res) {
        res.json({ text: 'eliminando una publicacion: ' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'actualizando una publicacion: ' + req.params.id });
    }
}
exports.homeController = new HomeController();
exports.default = exports.homeController;
