import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  usuarios: any=[];

  constructor() { }

  ngOnInit(): void {
  }

  corre='';
  cont='';
  getValueCorre(val:string){
    console.warn(val)
    this.corre=val
  }
  getValueCont(val2:string){
    console.warn(val2)
    this.cont=val2
  }



}
