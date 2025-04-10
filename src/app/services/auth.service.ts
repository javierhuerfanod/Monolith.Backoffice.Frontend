import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string, recaptchaToken: string): Observable<any> {
    if (email === 'admin@example.com' && password === '123456' && recaptchaToken) {
      return of({ token: 'fake-jwt-token-12345' }).pipe(delay(1000));
    }
    return throwError(() => new Error('Credenciales inválidas o reCAPTCHA no válido'));
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
