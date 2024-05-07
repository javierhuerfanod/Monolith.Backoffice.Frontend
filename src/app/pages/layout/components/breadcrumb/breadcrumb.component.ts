import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe(() => {
      this.breadcrumbItems = this.createBreadcrumb(this.activatedRoute.root);
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

}
