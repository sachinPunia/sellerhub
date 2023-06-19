import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingeditModelComponent } from './shippingedit-model.component';

describe('ShippingeditModelComponent', () => {
  let component: ShippingeditModelComponent;
  let fixture: ComponentFixture<ShippingeditModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingeditModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingeditModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
