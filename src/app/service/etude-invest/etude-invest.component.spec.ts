import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudeInvestComponent } from './etude-invest.component';

describe('EtudeInvestComponent', () => {
  let component: EtudeInvestComponent;
  let fixture: ComponentFixture<EtudeInvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudeInvestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudeInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
