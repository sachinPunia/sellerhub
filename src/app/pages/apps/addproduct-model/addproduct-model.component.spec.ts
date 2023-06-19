import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductModelComponent } from './addproduct-model.component';

describe('AddproductModelComponent', () => {
  let component: AddproductModelComponent;
  let fixture: ComponentFixture<AddproductModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
