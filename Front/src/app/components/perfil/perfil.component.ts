import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Login } from 'src/app/models/login';
import { Publicacion } from 'src/app/models/publicacion';
import { LoginService } from 'src/app/services/login.service';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  nombre_usuario = this.loginService.nombre_usuario;

  datos: any = []
  publicaciones: any = [];

publicacion: Publicacion = {
  id: 0,
  usuario: '',
  curso: '',
  catedratico: '',
  mensaje: '',
  created_at: new Date
};  

  constructor(private activatedRoute: ActivatedRoute, private loginService: LoginService, private publicacionesService: PublicacionesService) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.publicacionesService.getPublicacion(params['id'])
      .subscribe(
        res =>{
          this.publicacion = res;
          this.getUsuario();
        },
        err => console.error(err)
        )
      }
      
  }

  getUsuario(){
    // obtiene los datos del usuario
    const id = this.publicacion.id as any;
    console.log(id)
    this.loginService.getUser(id)
    .subscribe(
      res => {
        this.datos = res;
      },
      err => console.error(err)
    )
  }

}
