import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './shared/sidemenu/sidemenu.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, SideMenuComponent],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent {}
