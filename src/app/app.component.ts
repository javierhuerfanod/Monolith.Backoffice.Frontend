import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importar BrowserAnimationsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Agregar BrowserAnimationsModule aquí
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {}