import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormproductattributeComponent } from './formproductattribute.component';

describe('FormproductattributeComponent', () => {
  let component: FormproductattributeComponent;
  let fixture: ComponentFixture<FormproductattributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormproductattributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormproductattributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
