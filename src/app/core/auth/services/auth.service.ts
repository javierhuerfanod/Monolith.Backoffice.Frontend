import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private serviceBaseUrl = `${environment.baseUrl}`;
  private applicationAuth = `${environment.applicationAuth}`;

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: { email: string, password: string }) {
    const headers = new HttpHeaders({
      'Application-Token': this.applicationAuth
    });

    const body = {
      email: credentials.email,
      password: credentials.password     
    };    
        this.http.post<any>(`${this.serviceBaseUrl}/api/v1/Authentication/login`, body, { headers })
        .subscribe(
          response => {            
            this.saveToken(response.data);          
          },
          error => {
            console.error('Error en la solicitud:', error);
            
          }
        );
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
    console.log('guardo el token');
    window.location.reload();
    
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
