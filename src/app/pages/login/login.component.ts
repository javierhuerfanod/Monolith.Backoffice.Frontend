
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecaptchaModule } from 'ng-recaptcha';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RecaptchaModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  recaptchaToken = '';
  recaptchaSiteKey = environment.recaptcha.siteKey;

  // Variables para manejar errores
  emailError = false;
  passwordError = false;
  recaptchaError = false;
  footerMessage = '';

  constructor(private router: Router) {}

  onRecaptchaResolved(token: string) {
    this.recaptchaToken = token;
  }

  onLogin() {
    if (this.email !== '' && this.password !== '') {
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Resetear errores
      this.emailError = false;
      this.passwordError = false;
      this.recaptchaError = false;
      this.footerMessage = '';
  
      if (!this.email) {
          this.emailError = true;
          this.footerMessage = 'El campo de correo es obligatorio.';
          return;
      }
  
      if (!emailRegex.test(this.email)) {
          this.emailError = true;
          this.footerMessage = 'Por favor ingresa un correo electrónico válido.';
          return;
      }
  
      if (!this.password) {
          this.passwordError = true;
          this.footerMessage = 'El campo de contraseña es obligatorio.';
          return;
      }
  
      if (!this.recaptchaToken) {
          this.recaptchaError = true;
          this.footerMessage = 'Por favor completa el reCAPTCHA.';
          return;
      }
  
      console.log('Login correcto, token:', this.recaptchaToken);
      this.router.navigate(['/home']);
    } else {
      this.footerMessage = 'Por favor completa todos los campos.';
      this.emailError = !this.email;
      this.passwordError = !this.password;
    }
  }
}