import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { AppComponent } from '../../../app.component';
import { ColorSchemeService } from '../../services/color-scheme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule],
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

  constructor(public colorSchemeService: ColorSchemeService) {}

  isDark: boolean = false;

  ngOnInit(): void {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      // dark mode
      this.currentTheme = 'light';
      this.colorSchemeService.update('light');
    } else {
      this.currentTheme = 'dark';
      this.colorSchemeService.update('dark');
    }
  }

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
}
