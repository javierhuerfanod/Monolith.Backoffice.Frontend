import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './pages/layout/layout.module';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { UserListComponent } from './src/app/pages/modules/users/components/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,    
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    ToastModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
