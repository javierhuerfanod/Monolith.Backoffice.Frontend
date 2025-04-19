import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { LayoutService } from '../../services/layout.service';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [MessageService]
})
export class NavbarComponent  implements OnInit{
  
  items!: MenuItem[];
  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  visible: boolean = false;
  email: string = '';
  password: string = '';

  constructor(
    public layoutService: LayoutService,
    private messageService: MessageService,
    private authService:AuthService,
    private _router: Router) {}


  ngOnInit(): void {    
  }
  
  show(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: `${message}` });
  }

  showDialog() {
    const ruta = '/';    
    this._router.navigate([ruta]);
  }

  saveData() {       
    this.visible = false;
    const credentials = {
     email:this.email,
     password:this.password
    };
    this.authService.login(credentials);
  }

}
