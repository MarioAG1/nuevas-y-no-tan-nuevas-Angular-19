import { Component } from '@angular/core';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-sidemenu',
  imports: [],
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
