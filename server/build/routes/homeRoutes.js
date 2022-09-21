"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeController_1 = require("../controllers/homeController");
class HomeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', homeController_1.homeController.list); // Obtiene una publicacion
        this.router.get('/:id', homeController_1.homeController.getPublicacion); // Obtiene UNA publicacion
        this.router.post('/', homeController_1.homeController.create); // Crea una nueva publicacion
        this.router.delete('/:id', homeController_1.homeController.delete); // Elimina una publicacion
        this.router.put('/:id', homeController_1.homeController.update); // Actualiza una publicacion
    }
}
const homeRoutes = new HomeRoutes();
exports.default = homeRoutes.router;
