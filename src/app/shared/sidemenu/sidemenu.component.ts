import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
})
export class SideMenuComponent {
  public menuItems = routes
    .map((route) => {
      return route.children ?? [];
    })
    .flat()
    .filter((route) => {
      return route && route.path;
    })
    .filter((route) => {
      return !route.path?.includes(':');
    });

  constructor() {}
}
