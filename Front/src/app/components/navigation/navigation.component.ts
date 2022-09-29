import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public publicaciones: any = [];
  perfilid = '';

  constructor(private publicacionesService: PublicacionesService, private router: Router, private activatedRoute: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit(): void {
    this.perfilid = this.loginService.id_usuario;
  }

  navigateSearch(curso: string) {
    this.publicacionesService.dato = curso;
    console.log(this.publicacionesService.dato)
    this.router.navigate([`/home/search/${curso}`]);
    
  }

  refresh(): void{
    window.location.reload();
  }

}
