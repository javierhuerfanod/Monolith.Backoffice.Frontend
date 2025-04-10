import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, MenuModule, RouterModule],
  template: `
    <p-menu [model]="menuItems"></p-menu>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Usuarios',
        icon: 'pi pi-users',
        routerLink: '/usuarios'
      },
      {
        label: 'Pacientes',
        icon: 'pi pi-user',
        items: [
          {
            label: 'CRUD de Pacientes',
            icon: 'pi pi-id-card',
            routerLink: '/pacientes'
          },
          {
            label: 'Registros de Peso',
            icon: 'pi pi-chart-line',
            routerLink: '/pacientes/registros-peso'
          },
          {
            label: 'Registros de Emociones',
            icon: 'pi pi-heart',
            routerLink: '/pacientes/registros-emociones'
          },
          {
            label: 'Registros de Comidas',
            icon: 'pi pi-apple',
            routerLink: '/pacientes/registros-comidas'
          }
        ]
      }
    ];
  }
}