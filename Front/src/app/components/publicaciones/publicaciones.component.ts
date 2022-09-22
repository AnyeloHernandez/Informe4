import { Component, HostBinding, OnInit } from '@angular/core';

import { PublicacionesService } from '../../services/publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  publicaciones: any = [];

  constructor(private publicacionesService: PublicacionesService) { }

  ngOnInit() {
    this.getPublicaciones();
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
}
