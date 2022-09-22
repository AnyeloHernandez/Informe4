import { Component, Host, HostBinding, OnInit } from '@angular/core';
import { Publicacion } from '../../models/publicacion';
import { PublicacionesService } from '../../services/publicaciones.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  publicacion: Publicacion = {
    id: 0,
    usuario: '',
    curso: '',
    catedratico: '',
    mensaje: '',
    created_at: new Date
  };

  edit: boolean = false;

  constructor(private publicacionesService: PublicacionesService, private router: Router, private activadRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activadRoute.snapshot.params;
    if (params['id']) {
      this.publicacionesService.getPublicacion(params['id'])
      .subscribe(
      res =>{
        console.log(res);
        this.publicacion = res;
        this.edit = true;
      },
      err => console.error(err)
      )
    }
  }

  saveNewPublicacion() {
    delete this.publicacion.created_at;
    delete this.publicacion.id;
    this.publicacionesService.createPublicacion(this.publicacion)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        err => console.error(err)
      )
  }

  updatePublicacion() {
    delete this.publicacion.created_at;
    this.publicacionesService.updatePublicacion(this.publicacion.id as any, this.publicacion)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/home']);
      },
      err => console.error(err)
    )
  }
}
