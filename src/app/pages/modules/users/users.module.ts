import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
const routes: Routes = [
  { path: '', component: UserListComponent } // Ruta por defecto dentro de /users
];

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    DialogModule,
    ButtonModule,
    PaginatorModule,
    RouterModule.forChild(routes) // Importa las rutas definidas
  ]
})
export class UsersModule { }
