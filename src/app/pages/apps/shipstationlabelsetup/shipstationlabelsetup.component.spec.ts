import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipstationlabelsetupComponent } from './shipstationlabelsetup.component';

describe('ShipstationlabelsetupComponent', () => {
  let component: ShipstationlabelsetupComponent;
  let fixture: ComponentFixture<ShipstationlabelsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipstationlabelsetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipstationlabelsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
