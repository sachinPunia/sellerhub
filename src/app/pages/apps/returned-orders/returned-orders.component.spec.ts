import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnedOrdersComponent } from './returned-orders.component';

describe('ReturnedOrdersComponent', () => {
  let component: ReturnedOrdersComponent;
  let fixture: ComponentFixture<ReturnedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnedOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
