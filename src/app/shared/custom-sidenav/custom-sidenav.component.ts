import { Component, Input, computed, signal } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import ROUTES_CONSTANT from '../constant/RouteConstant';
import { MenuItem } from '../utils/Utils';




@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MaterialModule,RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {

  signalNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.signalNavCollapsed.set(val);
  }
  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Home',
      route: ROUTES_CONSTANT.HOME,
    },
    {
      icon: 'account_circle',
      label: 'Profile',
      route: ROUTES_CONSTANT.PROFILE,
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics',
    },
    {
      icon: 'comment',
      label: 'Comment',
      route: 'comment',
    },
  ]);

  profilePicSize = computed(() => (this.signalNavCollapsed() ? '32' : '100'));

}
