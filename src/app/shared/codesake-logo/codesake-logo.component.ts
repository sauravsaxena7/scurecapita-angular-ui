import { Component } from '@angular/core';
import { Router } from '@angular/router';
import ROUTES_CONSTANT from '../constant/RouteConstant';

@Component({
  selector: 'app-codesake-logo',
  standalone: true,
  imports: [],
  templateUrl: './codesake-logo.component.html',
  styleUrl: './codesake-logo.component.scss'
})
export class CodesakeLogoComponent {

  constructor(private router: Router){}

  onClickLogoAction(){
    this.router.navigateByUrl(ROUTES_CONSTANT.HOME);
  }

}
