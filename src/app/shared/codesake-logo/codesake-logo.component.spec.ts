import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesakeLogoComponent } from './codesake-logo.component';

describe('CodesakeLogoComponent', () => {
  let component: CodesakeLogoComponent;
  let fixture: ComponentFixture<CodesakeLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodesakeLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodesakeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
