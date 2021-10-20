import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationMaterielComponent } from './location-materiel.component';

describe('LocationMaterielComponent', () => {
  let component: LocationMaterielComponent;
  let fixture: ComponentFixture<LocationMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationMaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
