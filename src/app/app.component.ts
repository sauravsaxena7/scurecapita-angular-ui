import { Component, HostBinding, Renderer2, computed, signal } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { ColorSchemeService } from './shared/services/color-scheme.service';
import ROUTES_CONSTANT from './shared/constant/RouteConstant';
import { CustomSidenavComponent } from './shared/custom-sidenav/custom-sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MaterialModule, FooterComponent,CustomSidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'scurecapita-ui';

  showHead: boolean = false;
  currentTheme: string = '';

  collapsed=signal(false);
  sidenavWidth=computed(()=>this.collapsed() ? '65px':'250px');


  constructor(private router: Router,public colorSchemeService: ColorSchemeService) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/'+ROUTES_CONSTANT.SIGN_UP || event['url'] == '/'+ROUTES_CONSTANT.SIGN_IN) {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
  }

  ngOnInit(): void {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      // dark mode
      console.log("dark mode")
      this.currentTheme = 'dark';
      this.colorSchemeService.update('light');
    } else {
      this.currentTheme = 'light';
      this.colorSchemeService.update('light');
    }
  }
}
