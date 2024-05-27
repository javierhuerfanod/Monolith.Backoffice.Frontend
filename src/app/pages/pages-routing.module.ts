import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [     
      {
        path: 'listar-usuarios',
        loadChildren: () =>
          import('./modules/users/users.module').then((m) => m.UsersModule),
      },     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
