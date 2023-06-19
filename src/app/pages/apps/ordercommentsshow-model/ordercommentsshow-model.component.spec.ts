import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercommentsshowModelComponent } from './ordercommentsshow-model.component';

describe('OrdercommentsshowModelComponent', () => {
  let component: OrdercommentsshowModelComponent;
  let fixture: ComponentFixture<OrdercommentsshowModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdercommentsshowModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdercommentsshowModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
