import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CodesakeLogoComponent } from '../../shared/codesake-logo/codesake-logo.component';
import { Router } from '@angular/router';
import ROUTES_CONSTANT from '../../shared/constant/RouteConstant';
import { MatRuleWithTextComponent } from '../../shared/mat-rule-with-text/mat-rule-with-text.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule,CodesakeLogoComponent,MatRuleWithTextComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hide = true;
  constructor(private router: Router){}

  btn_loading:boolean=false;

  clickEvent(event: MouseEvent) {
    event.preventDefault();
    this.hide = !this.hide;
    event.stopPropagation();
  }

  onClickSignUpText(){
    this.router.navigateByUrl(ROUTES_CONSTANT.SIGN_UP);
  }
}
