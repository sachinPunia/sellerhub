import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiporderModelComponent } from './shiporder-model.component';

describe('ShiporderModelComponent', () => {
  let component: ShiporderModelComponent;
  let fixture: ComponentFixture<ShiporderModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiporderModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiporderModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
