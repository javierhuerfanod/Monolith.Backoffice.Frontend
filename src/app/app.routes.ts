import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  {
    path: '',
    loadComponent: () => import('./pages/main-layout/main-layout.component').then(m => m.MainLayoutComponent), // Cambiar top-level await
    children: [
      { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
      { path: 'usuarios', loadComponent: () => import('./pages/usuarios/usuarios.component').then(m => m.UsuariosComponent) },
      { path: 'pacientes', loadComponent: () => import('./pages/pacientes/pacientes.component').then(m => m.PacientesComponent) },
      { path: 'pacientes/registros-peso', loadComponent: () => import('./pages/pacientes/registros-peso/registros-peso.component').then(m => m.RegistrosPesoComponent) },
      { path: 'pacientes/registros-emociones', loadComponent: () => import('./pages/pacientes/registros-emociones/registros-emociones.component').then(m => m.RegistrosEmocionesComponent) },
      { path: 'pacientes/registros-comidas', loadComponent: () => import('./pages/pacientes/registros-comidas/registros-comidas.component').then(m => m.RegistrosComidasComponent) }
    ]
  },
  { path: '**', redirectTo: 'login' }
];