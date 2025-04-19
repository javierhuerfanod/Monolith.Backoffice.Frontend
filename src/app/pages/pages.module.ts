import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { LayoutModule } from './layout/layout.module';
import { BreadcrumbComponent } from './layout/components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { MenuComponent } from './layout/components/menu/menu.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { ToastModule } from 'primeng/toast';
import { MenuItemComponent } from './layout/components/menu-item/menu-item.component';
import { PanelModule } from 'primeng/panel';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    PagesComponent,
      SidebarComponent,
      NavbarComponent,
      FooterComponent,
      MenuComponent,
      BreadcrumbComponent,
      MenuItemComponent    
    
  ],
  imports: [    
    CommonModule,
    HttpClientModule, 
    PagesRoutingModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ToastModule,
    
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    RouterModule,
    BreadcrumbModule,
    PanelModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    BreadcrumbComponent,
    MenuItemComponent    
  ],
})
export class PagesModule {}