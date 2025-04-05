import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { UserWeightComponent } from './components/user-weight/user-weight.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { WelcomeComponent } from './components/welcome/welcome.component';
const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'usuario-peso', component: UserWeightComponent }
];

@NgModule({ declarations: [
        UserListComponent,
        UserWeightComponent,
        UserDetailComponent,
        WelcomeComponent
    ],
    exports: [
        RouterModule
    ], imports: [CommonModule,
        TableModule,
        DialogModule,
        ButtonModule,
        PaginatorModule,
        FormsModule,
        CalendarModule,
        InputTextModule,
        RouterModule.forChild(routes)], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class UsersModule { }
