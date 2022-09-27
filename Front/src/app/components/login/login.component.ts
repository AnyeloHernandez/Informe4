import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import{Router,ActivatedRoute} from '@angular/router'
import { isNgTemplate } from '@angular/compiler';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuarios: any=[];
  
  nombre_usuario = '';
  

  constructor(private loginService: LoginService  , private router: Router, private activatedRoute: ActivatedRoute) {
    
   }


   acces: boolean = false;

  //recibe valor de las cajas de texto
  displayVal='';
  displayVal2='';
  getValue(val:string){
    console.warn(val)
    this.displayVal=val
  }
  getValue2(val2:string){
    console.warn(val2)
    this.displayVal2=val2
  }
   
  

  ngOnInit(): void {
    this.loginService.getUsers().subscribe(
      res => {
        this.usuarios=res;
      },
      err=>console.error(err)
    )
  }

// Funcion del login
  compararUsuarios(){
    for (const item of this.usuarios){
      if(item.usuario == this.displayVal && item.contrasenna ==this.displayVal2){
        this.loginService.getNombreUsuario(item.usuario);
        
        this.router.navigate(['/home']);
      }
      
    }
  }
}



