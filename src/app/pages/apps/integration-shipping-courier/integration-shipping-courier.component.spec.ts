import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationShippingCourierComponent } from './integration-shipping-courier.component';

describe('IntegrationShippingCourierComponent', () => {
  let component: IntegrationShippingCourierComponent;
  let fixture: ComponentFixture<IntegrationShippingCourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationShippingCourierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationShippingCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
