import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ModalComponent } from './components/modal/modal.component';
import { TableComponent } from './components/table/table.component';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ErrorPageComponent,
    LoadingComponent,
    ModalComponent,
    TableComponent   
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastModule,
    TableModule,
    ButtonModule,
    TagModule,
    RatingModule,
    FormsModule
  ],
  exports:[
    TableComponent
  ]
})
export class SharedModule { }
