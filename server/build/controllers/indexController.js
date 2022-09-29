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
exports.indexController = void 0;
const database_1 = __importDefault(require("../database"));
class IndexController {
    //  Metodos para login y manejo de usuarios
    //  Obtener TODOS los usuarios
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const login = yield database_1.default.query('SELECT * FROM login');
            res.json(login);
        });
    }
    //  Obtener UN usuario
    getLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text: 'Usuario: ' + req.params.id})
            const { id } = req.params;
            const login = yield database_1.default.query('SELECT * FROM login WHERE id = ?', [id]);
            if (login.length > 0) {
                return res.json(login[0]);
            }
            res.status(404).json({ text: "El usuario no existe" });
        });
    }
    //  Crear
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO login set ?', [req.body]);
            // console.log(req.body);
            res.json({ message: 'Usuario creado' });
        });
    }
    //  Eliminar
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM login WHERE id = ?', [id]);
            res.json({ message: 'Usuario eliminado' });
            // res.json({text: 'eliminando usuario: ' + req.params.id});
        });
    }
    //  Actualizar
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text: 'actualizando usuario: ' + req.params.id});
            const { id } = req.params;
            yield database_1.default.query('UPDATE login set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Usuario actualizado' });
        });
    }
    //  Obtener UN usuario
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario } = req.params;
            const login = yield database_1.default.query('SELECT * FROM login WHERE usuario = ?', [usuario]);
            if (login.length > 0) {
                return res.json(login[0]);
            }
            res.status(404).json({ text: "El usuario no existe" });
        });
    }
}
exports.indexController = new IndexController();
