import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home.component';
import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [
  {
    path: 'lobby',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LobbyComponent,
        outlet: 'menuList',
      },
      {
        path: 'about',
        component: AboutMeComponent,
        outlet: 'menuList',
      },
      {
        path: 'home',
        redirectTo: 'lobby',
        pathMatch: 'full',
      },
      {
        path: 'ahorcado',
        loadChildren: () =>
          import('../ahorcado/ahorcado.module').then((m) => m.AhorcadoModule),
        outlet: 'menuList',
      },
      {
        path: 'mayoromenor',
        loadChildren: () =>
          import('../mayoromenor/mayoromenor.module').then(
            (m) => m.MayoromenorModule
          ),
        outlet: 'menuList',
      },
      {
        path: 'preguntados',
        loadChildren: () =>
          import('../preguntados/preguntados.module').then(
            (m) => m.PreguntadosModule
          ),
        outlet: 'menuList',
      },
      {
        path: 'sopadeletras',
        loadChildren: () =>
          import('../sopadeletras/sopadeletras.module').then(
            (m) => m.SopadeletrasModule
          ),
        outlet: 'menuList',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/home/lobby',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
