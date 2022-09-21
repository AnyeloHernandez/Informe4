import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://localhost/3000/login'

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.API_URI}`)
  }
}
