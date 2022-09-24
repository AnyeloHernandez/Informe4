"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeController = void 0;
const database_1 = __importDefault(require("../database"));
class HomeController {
    //  Metodos para las publicaciones
    //  Obtener TODOS las publicaciones
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const publicaciones = yield database_1.default.query('SELECT * FROM publicaciones');
            res.json(publicaciones);
        });
    }
    //  Obtener UNA publicacion
    getPublicacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const publicaciones = yield database_1.default.query('SELECT * FROM publicaciones WHERE id = ?', [id]);
            if (publicaciones.length > 0) {
                return res.json(publicaciones[0]);
            }
            res.status(404).json({ text: "La publicacion no existe" });
        });
    }
    //  Crear
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO publicaciones set ?', [req.body]);
            // console.log(req.body);
            res.json({ message: 'Publicacion creada' });
        });
    }
    //  Eliminar
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM publicaciones WHERE id = ?', [id]);
            res.json({ message: 'Publicacion eliminada' });
        });
    }
    //  Actualizar
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE publicaciones set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Publicacion actualizada' });
        });
    }
    SearchQuery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { curso } = req.params;
            // console.log(`%${curso}%`);
            const publicaciones = yield database_1.default.query('SELECT * FROM publicaciones WHERE curso LIKE ?', [`%${curso}%`]);
            console.log(publicaciones);
            res.json(publicaciones);
        });
    }
}
exports.homeController = new HomeController();
exports.default = exports.homeController;
