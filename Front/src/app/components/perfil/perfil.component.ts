import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  nombre_usuario = this.loginService.nombre_usuario;
  

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

}
