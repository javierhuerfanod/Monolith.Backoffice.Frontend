import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './modules/users/components/welcome/welcome.component';

const ROUTES: Routes = [
  { path: '', component: WelcomeComponent },
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
