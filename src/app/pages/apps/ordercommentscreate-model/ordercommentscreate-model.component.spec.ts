import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercommentscreateModelComponent } from './ordercommentscreate-model.component';

describe('OrdercommentscreateModelComponent', () => {
  let component: OrdercommentscreateModelComponent;
  let fixture: ComponentFixture<OrdercommentscreateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdercommentscreateModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdercommentscreateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
