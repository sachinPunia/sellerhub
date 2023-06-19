import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedproductsModelComponent } from './linkedproducts-model.component';

describe('LinkedproductsModelComponent', () => {
  let component: LinkedproductsModelComponent;
  let fixture: ComponentFixture<LinkedproductsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedproductsModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedproductsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
