import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { AppComponent } from '../../../app.component';
import { ColorSchemeService } from '../../services/color-scheme.service';
import { Router } from '@angular/router';
import ROUTES_CONSTANT from '../../constant/RouteConstant';
import { CodesakeLogoComponent } from '../../codesake-logo/codesake-logo.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule,CodesakeLogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // constructor(private appComponent:AppComponent) {}
  themes = [
    {
      name: 'dark',
      icon: 'brightness_3',
    },
    {
      name: 'light',
      icon: 'wb_sunny',
    },
  ];

  currentTheme: string = '';

  constructor(public colorSchemeService: ColorSchemeService, private router: Router,private appComponent:AppComponent) {
    this.currentTheme=this.appComponent.currentTheme;
  }

  isDark: boolean = false;

  

  setTheme() {
    // this.isDark=d;
    // this.appComponent.setTheme(d);
    console.log('curent theme', this.currentTheme);

    if (this.currentTheme == 'light') {
      this.currentTheme = 'dark';
      localStorage.setItem('currentTheme', this.themes[0].name);
      this.colorSchemeService.update('dark');
    } else {
      this.currentTheme = 'light';
      this.colorSchemeService.update('light');
      localStorage.setItem('currentTheme', this.themes[1].name);
    }
  }
  onClickSignIn(){
    this.router.navigateByUrl(ROUTES_CONSTANT.SIGN_UP);
  }
}
