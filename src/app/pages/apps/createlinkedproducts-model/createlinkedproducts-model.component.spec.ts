import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelinkedproductsModelComponent } from './createlinkedproducts-model.component';

describe('CreatelinkedproductsModelComponent', () => {
  let component: CreatelinkedproductsModelComponent;
  let fixture: ComponentFixture<CreatelinkedproductsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatelinkedproductsModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelinkedproductsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
