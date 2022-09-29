import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Login } from'../models/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://localhost:3000/login'
  public nombre_usuario = ''
  public id_usuario = '';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.API_URI}`)
  }

  getUser(nombre: string){
    return this.http.get(`${this.API_URI}/usuario/${nombre}`)
  }

}
