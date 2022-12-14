import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { Route } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { LoginService } from './services/login.service';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { PublicacionesService } from './services/publicaciones.service';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicacionesComponent,
    PublicarComponent,
    NavigationComponent,
    RegisterComponent,
    SearchComponent,
    PerfilComponent,
    RecuperarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    PublicacionesService,
    NavigationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
