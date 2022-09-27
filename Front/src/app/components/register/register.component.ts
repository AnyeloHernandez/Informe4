import { Component, HostBinding, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import {SaveUser} from '../../models/regis';
import {RegisService} from '../../services/regis.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    @HostBinding('class') classes = 'row';

    registro : SaveUser = {
    correo : '',
    contrasenna: '',
    usuario: '',
    nombres: '',
    apellidos: ''
    };

    constructor(private regisServices: RegisService) { }




  ngOnInit(): void {
  }

  //reutilize datos de
  saveUsuario(){
    this.regisServices.saveUser(this.registro)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }



  
}
