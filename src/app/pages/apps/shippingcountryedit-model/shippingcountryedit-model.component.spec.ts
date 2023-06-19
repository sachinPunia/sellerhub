import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingcountryeditModelComponent } from './shippingcountryedit-model.component';

describe('ShippingcountryeditModelComponent', () => {
  let component: ShippingcountryeditModelComponent;
  let fixture: ComponentFixture<ShippingcountryeditModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingcountryeditModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingcountryeditModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
