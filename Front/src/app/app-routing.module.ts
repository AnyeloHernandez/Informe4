import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
      path: 'home',
      component: PublicacionesComponent
  },
  {
    path: 'publicar',
    component: PublicarComponent
  },
  {
    path: 'home/editar/:id',
    component: PublicarComponent
  },
  {
    path: 'regis',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
