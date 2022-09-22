import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
<<<<<<< HEAD
import { PublicarComponent } from './components/publicar/publicar.component';
=======
import { RegisterComponent } from './components/register/register.component';

>>>>>>> 993dfc1fdbac617cbe928e2594a343e2fbd799c1

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
<<<<<<< HEAD
    path: 'publicar',
    component: PublicarComponent
  },
  {
    path: 'home/editar/:id',
    component: PublicarComponent
=======
    path: 'regis',
    component: RegisterComponent
>>>>>>> 993dfc1fdbac617cbe928e2594a343e2fbd799c1
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
