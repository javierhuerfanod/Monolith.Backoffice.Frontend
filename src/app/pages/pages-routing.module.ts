import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'listar-usuarios',
    loadChildren: () =>
      import('./modules/users/users.module').then((m) => m.UsersModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
