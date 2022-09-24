import { Component, HostBinding, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

import { PublicacionesService } from '../../services/publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  publicaciones: any = [];
  nombre_usuario = this.loginService.nombre_usuario;

  constructor(private publicacionesService: PublicacionesService, private loginService: LoginService) { }

  ngOnInit() {
    this.getPublicaciones(); // Obtiene las publicaciones cuando se inicia el componente

    }
    getPublicaciones(){
      this.publicacionesService.getPublicaciones().subscribe(
        res => {
          this.publicaciones = res;
        },
        err => console.log(err)
      );
    }

    deletePublicacion(id: string) {
      this.publicacionesService.deletePublicacion(id).subscribe(
        res => {
          console.log(res);
          this.getPublicaciones();
        },
        err => console.log(err)
      );
    }

    searchQuery(curso: string) {
      this.publicacionesService.searchPublicacion(curso).subscribe(
        res => {
          console.log(res);
          this.publicaciones = res;
        },
        err => console.log(err)
      );
    }
}
