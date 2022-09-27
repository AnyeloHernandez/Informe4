import { Injectable } from '@angular/core';
import { SaveUser } from '../models/regis';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisService {
  API_URI = 'http://localhost:3000/login'
  public nombre_usuario = ''

  constructor(private http: HttpClient) { }
  
  saveUser(user: SaveUser){
    return this.http.post(`${this.API_URI}`,user)
  }

  
}
