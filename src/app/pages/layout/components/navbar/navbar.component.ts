import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [MessageService]
})
export class NavbarComponent  implements OnInit{

  constructor(public layoutService: LayoutService,private messageService: MessageService) {}


  ngOnInit(): void {
    
  }
  
  show(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: `${message}` });
}

  items!: MenuItem[];
  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;


}
