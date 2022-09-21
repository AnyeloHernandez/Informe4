import { Request, Response } from 'express';
import pool from '../database';

class HomeController {
//  Metodos para las publicaciones
//  Obtener TODOS las publicaciones
public async list (req: Request, res: Response) {
    const publicaciones = await pool.query('SELECT * FROM publicaciones');
    res.json(publicaciones);
}

//  Obtener UNA publicacion
public async getPublicacion(req: Request, res: Response): Promise<any>{
    const { id } = req.params;
    const publicaciones = await pool.query('SELECT * FROM publicaciones WHERE id = ?', [id]);
    if (publicaciones.length > 0) {
        return res.json(publicaciones[0]);
    }
    res.status(404).json({text: "La publicacion no existe"});
}

//  Crear
public async create (req: Request, res: Response): Promise<void> { // Indica que aunque se haga un promise no se devuelve nada
    await pool.query('INSERT INTO publicaciones set ?', [req.body]);
    // console.log(req.body);
    res.json({message: 'Publicacion creada'});
}

//  Eliminar
public async delete(req: Request, res: Response){
    const { id } = req.params;
    await pool.query('DELETE FROM publicaciones WHERE id = ?', [id]);
    res.json({message: 'Publicacion eliminada'});
}

//  Actualizar
public async update(req: Request, res: Response): Promise<void>{
    const { id } = req.params;
    await pool.query('UPDATE publicaciones set ? WHERE id = ?', [req.body, id]);
    res.json({message: 'Publicacion actualizada'});
}
}


export const homeController = new HomeController();
export default homeController;