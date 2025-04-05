import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({ declarations: [
        LoginComponent,
    ], imports: [CommonModule,
        FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AuthModule { }
