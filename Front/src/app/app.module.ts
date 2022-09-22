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
<<<<<<< HEAD
import { PublicarComponent } from './components/publicar/publicar.component';
import { NavigationComponent } from './components/navigation/navigation.component';

=======
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 993dfc1fdbac617cbe928e2594a343e2fbd799c1



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicacionesComponent,
<<<<<<< HEAD
    PublicarComponent,
    NavigationComponent
=======
    RegisterComponent
>>>>>>> 993dfc1fdbac617cbe928e2594a343e2fbd799c1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule
=======
    ReactiveFormsModule
>>>>>>> 993dfc1fdbac617cbe928e2594a343e2fbd799c1
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
