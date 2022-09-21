import { Component, OnInit } from '@angular/core';

import { PublicacionesService } from '../../services/publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  publicaciones: any = [];

  constructor(private publicacionesService: PublicacionesService) { }

  ngOnInit() {
    this.publicacionesService.getPublicaciones().subscribe({
      next: res => {
        this.publicaciones = res;
      },
      error: err => console.log(err)
/*
      res => {
        this.publicaciones = res;
      },
      err => console.log(err)

*/
  });
  }

}
