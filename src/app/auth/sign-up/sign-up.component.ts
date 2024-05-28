import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CodesakeLogoComponent } from '../../shared/codesake-logo/codesake-logo.component';
import { MatRuleWithTextComponent } from '../../shared/mat-rule-with-text/mat-rule-with-text.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MaterialModule,CodesakeLogoComponent,MatRuleWithTextComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  hide = true;

  btn_loading:boolean=false;

  clickEvent(event: MouseEvent) {
    event.preventDefault();
    this.hide = !this.hide;
    event.stopPropagation();
  }

}
