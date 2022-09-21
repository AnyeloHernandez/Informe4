import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor() { }
  

  //resive valor de las cajas de texto
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
  }



}


