import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MenuItem } from '../../shared/utils/Utils';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  btn_loading:boolean=false;
  account_setting_active:number=0;

  menuItems = signal<MenuItem[]>([
    {
      icon: 'icon ion-md-person',
      label: 'Edit Profile',
      route: '',
    },
    {
      icon: "icon ion-md-key",
      label: 'Password',
      route: '',
    },
    {
      icon: 'icon ion-md-flower',
      label: 'Authorization & Authentication',
      route: 'dashboard',
    },
    {
      icon: 'icon ion-md-aperture',
      label: 'Setting',
      route: '',
    },
    {
      icon: 'icon ion-md-list',
      label: 'Account Activities',
      route: 'analytics',
    },
  ]);

  setActiveAccountSetting(i:number){
    this.account_setting_active=i;
  }
}
