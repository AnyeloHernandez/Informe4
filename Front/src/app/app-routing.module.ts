import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { PerfilComponent } from './components/perfil/perfil.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { RegisterComponent } from './components/register/register.component';
import{ RecuperarComponent } from './components/recuperar/recuperar.component'
import { SearchComponent } from './components/search/search.component';



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
  },
  {
    path: 'home/search/:dato',
    component: SearchComponent
  },
  {
    path: 'perfil/:id',
    component: PerfilComponent
  },
  {
    path: 'recuperar',
    component: RecuperarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
