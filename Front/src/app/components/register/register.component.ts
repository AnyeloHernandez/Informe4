import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrarUsuario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrarUsuario =this.fb.group({
      correo:['',Validators.required],
      contra:['',Validators.required],
      usuario:['',Validators.required],
      nombres:['',Validators.required],
      apellidos:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }


  registrar(){
    const correo = this.registrarUsuario.value.correo
    const contra = this.registrarUsuario.value.contra
    const usuario = this.registrarUsuario.value.usuario
    const nombres = this.registrarUsuario.value.nombres
    const apellidos = this.registrarUsuario.value.apellidos

    console.log(correo,contra,usuario,nombres,apellidos)
  }

  
}
