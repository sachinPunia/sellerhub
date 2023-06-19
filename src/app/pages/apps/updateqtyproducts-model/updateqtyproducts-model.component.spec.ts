import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateqtyproductsModelComponent } from './updateqtyproducts-model.component';

describe('UpdateqtyproductsModelComponent', () => {
  let component: UpdateqtyproductsModelComponent;
  let fixture: ComponentFixture<UpdateqtyproductsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateqtyproductsModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateqtyproductsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
