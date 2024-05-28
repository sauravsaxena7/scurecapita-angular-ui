import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRuleWithTextComponent } from './mat-rule-with-text.component';

describe('MatRuleWithTextComponent', () => {
  let component: MatRuleWithTextComponent;
  let fixture: ComponentFixture<MatRuleWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatRuleWithTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatRuleWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
