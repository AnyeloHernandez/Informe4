import { Component, HostBinding, OnInit } from '@angular/core';

import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  
  publicaciones: any = [];

  constructor(private publicacionesService: PublicacionesService, private navigationComponent: NavigationComponent) { }

  ngOnInit(): void {
    // console.log(this.publicacionesService.dato)
    window.location.reload;
    this.searchQuery(this.publicacionesService.dato);
  }

  deletePublicacion(id: string) {
    this.publicacionesService.deletePublicacion(id).subscribe(
      res => {
        console.log(res);
        this.searchQuery(this.publicacionesService.dato);
        // this.searchQuery(curso);
      },
      err => console.log(err)
    );
  }


  searchQuery(curso: string) {
    this.publicacionesService.searchPublicacion(curso).subscribe(
      res => {
        this.publicaciones = res;
        // console.log(res);
      },
      err => console.log(err)
    );
  }
}
