import { Component } from '@angular/core';
import { LayoutService } from './layout/services/layout.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
 constructor(  public layoutService: LayoutService){}

 
 get containerClass() {
  return {
    'layout-theme-light': this.layoutService.config.colorScheme === 'light',
    'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
    'layout-overlay': this.layoutService.config.menuMode === 'overlay',
    'layout-static': this.layoutService.config.menuMode === 'static',
    'layout-static-inactive':
      this.layoutService.state.staticMenuDesktopInactive &&
      this.layoutService.config.menuMode === 'static',
    'layout-overlay-active': this.layoutService.state.overlayMenuActive,
    'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
    'p-input-filled': this.layoutService.config.inputStyle === 'filled',
    'p-ripple-disabled': !this.layoutService.config.ripple,
  };
}
}
