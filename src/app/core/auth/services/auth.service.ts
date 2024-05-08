import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    console.log('llegooo');
    
    const headers = new HttpHeaders({
      'Application-Token': this.applicationAuth
    });

    const body = {
      //email: credentials.email,
      //password: credentials.password
      email: 'diegofdiazh@javeriana.edu.co',
      password: 'Colombia123*'
    };    
        this.http.post<any>(`${this.serviceBaseUrl}/api/v1/Authentication/login`, body, { headers })
        .subscribe(
          response => {
            console.log('Respuesta del servidor:', response);
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
    
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
