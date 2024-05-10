import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';

const routes: Routes = 
[  
  { path: '', component: LoginComponent },
  {
    path: 'usuarios',
    loadChildren: () =>
    import('./pages/pages.module').then((m) => m.PagesModule),
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
