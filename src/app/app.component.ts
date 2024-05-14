import { Component, HostBinding, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { ColorSchemeService } from './shared/services/color-scheme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MaterialModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'scurecapita-ui';
  @HostBinding('class') class: string = '';
  isDark: boolean = false;




  constructor(
    private snackbar: MatSnackBar,
    private renderer: Renderer2,
    private colorSchemeService: ColorSchemeService
  ) {
    this.colorSchemeService.load();
  }

  ngOnInit(): void {
    this.isDark = localStorage.getItem('theme') == 'dark';
    this.setTheme(this.isDark);
  }

  setTheme(isDark: boolean) {
    if (isDark) {
      //this.class='dark-theme'
      //this.snackbar.open('Dark theme apply','OK');
      this.renderer.addClass(document.body, 'dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      this.class = '';
      //this.snackbar.open('light  theme apply','OK');
      //this.renderer.removeClass(document.body, 'dark-theme');
      localStorage.setItem('theme', 'light');
      this.snackbar.open('Light theme apply', 'OK');
    }
  }

  
}
