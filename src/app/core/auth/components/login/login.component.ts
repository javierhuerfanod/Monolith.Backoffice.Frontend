import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { InputText } from 'primeng/inputtext';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  email: string = '';
  password: string = '';
  initpage: boolean = false;
  constructor(
    private authService:AuthService,
    private _router: Router) {}

  ngOnInit(): void {   
    const token = localStorage.getItem('token');
    if(token)
      {
        localStorage.removeItem('token');
        window.location.reload();
      }
  }
  

  login() {
    const credentials = {     
      email: this.email,
      password: this.password
    };
    this.authService.login(credentials);
    const ruta = '/usuarios';    
    this._router.navigate([ruta]);
  }

  }
