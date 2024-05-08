import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  model: any[] = [];
  constructor(public layoutService: LayoutService) {}

  ngOnInit() {

    
    this.model = [      
      {
        label: 'Menú',
        items: [
          {
            label: 'Usuarios',
            icon: 'pi pi-fw  pi-users',
            items: [
              {
                label: 'usuarios',
                icon: 'pi pi-fw pi-user-plus',
                routerLink: ['/usuarios/listar-usuarios/'],
              }
            ],
          }
        ],
      },
    ];
  }
}
