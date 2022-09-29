import { Request, Response } from 'express';
import pool from '../database';

class IndexController {
//  Metodos para login y manejo de usuarios

//  Obtener TODOS los usuarios
    public async list (req: Request, res: Response) {
        const login = await pool.query('SELECT * FROM login');
        res.json(login);
    }

//  Obtener UN usuario
    public async getLogin(req: Request, res: Response): Promise<any>{
        // res.json({text: 'Usuario: ' + req.params.id})
        const { id } = req.params;
        const login = await pool.query('SELECT * FROM login WHERE id = ?', [id]);
        if (login.length > 0) {
            return res.json(login[0]);
        }
        res.status(404).json({text: "El usuario no existe"});
    }

//  Crear
    public async create (req: Request, res: Response): Promise<void> { // Indica que aunque se haga un promise no se devuelve nada
        await pool.query('INSERT INTO login set ?', [req.body]);
        // console.log(req.body);
        res.json({message: 'Usuario creado'});
    }

//  Eliminar
    public async delete(req: Request, res: Response){
        const { id } = req.params;
        await pool.query('DELETE FROM login WHERE id = ?', [id]);
        res.json({message: 'Usuario eliminado'});
        // res.json({text: 'eliminando usuario: ' + req.params.id});
    }

//  Actualizar
    public async update(req: Request, res: Response): Promise<void>{
        // res.json({text: 'actualizando usuario: ' + req.params.id});
        const { id } = req.params;
        await pool.query('UPDATE login set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Usuario actualizado'});
    }

//  Obtener UN usuario
    public async getUser(req: Request, res: Response){
        const { usuario } = req.params;
        const login = await pool.query('SELECT * FROM login WHERE usuario = ?', [usuario]);
        if (login.length > 0) {
            return res.json(login[0]);
        }
        res.status(404).json({text: "El usuario no existe"});
    }
    
}



export const indexController = new IndexController();