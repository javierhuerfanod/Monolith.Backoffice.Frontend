import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './pages/layout/layout.module';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    CommonModule,    
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    ToastModule,    
    DialogModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
