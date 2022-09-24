import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Login } from'../models/login';
import { SaveUser } from '../models/regis';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://localhost:3000/login'
  public nombre_usuario = ''

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.API_URI}`)
  }

  getUser(id: string){
    return this.http.get(`${this.API_URI}/${id}`)
  }

  saveUser(user: SaveUser){
    return this.http.post(`${this.API_URI}`,user)
  }

  getNombreUsuario(user: any){
    this.nombre_usuario = user;
    return user;
  }
}
