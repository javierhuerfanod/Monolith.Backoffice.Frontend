import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter, map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
    standalone: false
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];
  mostrarBoton: boolean = true;
  userNameFromUrl: string = ''; // Variable para almacenar el nombre de usuario de la URL

  constructor(private router: Router,
     private activatedRoute: ActivatedRoute,
     private location: Location) {      
     }
  
  ngOnInit(): void {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe(() => {
      this.breadcrumbItems = this.createBreadcrumb(this.activatedRoute.root);
      this.verificarURL();
      this.getUserNameFromUrl(); // Obtener el nombre de usuario de la URL
    });
    
  }
  
  private createBreadcrumb(route: ActivatedRoute, url: string = '', breadcrumbs: any[] = []): any[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map((segment) => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }
    
    breadcrumbs.push({ label: routeURL, url: url });
      return this.createBreadcrumb(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }

  verificarURL(): void {
    const urlActual = this.location.path();
    if (urlActual === '/usuarios') {
      this.mostrarBoton = false;
      this.userNameFromUrl='';
    } else {
      this.mostrarBoton = true;
      if(urlActual === '/usuarios' ||urlActual === '/usuarios/listar-usuarios'){
        this.userNameFromUrl='';
      }
    }
  }
  
  // Método para obtener el nombre de usuario de la URL
  getUserNameFromUrl(): void {
    this.activatedRoute.queryParams.pipe(
      map(params => params['userName'])
    ).subscribe(userName => {
      if (userName) {
        this.userNameFromUrl = userName.replace(/_/g, ' ');
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

}
