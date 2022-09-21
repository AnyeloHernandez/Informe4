import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Publicacion } from '../models/publicacion';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }
// Modulos para manejar las publicaciones
  getPublicaciones(){
    return this.http.get(`${this.API_URI}/home`);
  }
  getPublicacion(id: string){
    return this.http.get(`${this.API_URI}/home/${id}`);
  }

  deletePublicacion(id: string){
    return this.http.delete(`${this.API_URI}/${id}/home/${id}`)
  }

  createPublicacion(publicacion: Publicacion){    
    return this.http.post(`${this.API_URI}/home`, publicacion);
  }

  updatePublicacion(id: string, updatedGame: Publicacion): Observable<Publicacion>{
    return this.http.put(`${this.API_URI}/${id}/home/${id}`, updatedGame)
  }
}
