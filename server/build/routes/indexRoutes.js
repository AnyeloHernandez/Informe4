"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.list); // Obtiene TODOS login
        this.router.delete('/:id', indexController_1.indexController.delete); // Elimina un usuario
        this.router.post('/', indexController_1.indexController.create); // Crea un usuario
        this.router.put('/:id', indexController_1.indexController.update); // Actualiza un usuario
        this.router.get('/:id', indexController_1.indexController.getLogin); // Obtiene UN login
        this.router.get('/usuario/:usuario', indexController_1.indexController.getUser); // Obtiene un usuario solo por nombre
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
