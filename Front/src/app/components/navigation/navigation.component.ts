import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  publicaciones: any = [];

  constructor(private publicacionesService: PublicacionesService) { }

  ngOnInit(): void {
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
