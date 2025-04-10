import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  usuarios: any[] = [];
  nuevoUsuario = { id: 0, nombre: '', email: '' };
  editandoUsuario: any = null;

  ngOnInit() {
    // Datos iniciales (puedes reemplazar esto con datos de una API)
    this.usuarios = [
      { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@example.com' },
      { id: 2, nombre: 'Ana Gómez', email: 'ana.gomez@example.com' }
    ];
  }

  agregarUsuario() {
    if (this.nuevoUsuario.nombre && this.nuevoUsuario.email) {
      this.nuevoUsuario.id = this.usuarios.length + 1;
      this.usuarios.push({ ...this.nuevoUsuario });
      this.nuevoUsuario = { id: 0, nombre: '', email: '' };
    }
  }

  editarUsuario(usuario: any) {
    this.editandoUsuario = { ...usuario };
  }

  guardarEdicion() {
    const index = this.usuarios.findIndex(u => u.id === this.editandoUsuario.id);
    if (index !== -1) {
      this.usuarios[index] = { ...this.editandoUsuario };
      this.editandoUsuario = null;
    }
  }

  cancelarEdicion() {
    this.editandoUsuario = null;
  }

  eliminarUsuario(id: number) {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
  }
}