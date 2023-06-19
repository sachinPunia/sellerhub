import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormshippingrulesComponent } from './formshippingrules.component';

describe('FormshippingrulesComponent', () => {
  let component: FormshippingrulesComponent;
  let fixture: ComponentFixture<FormshippingrulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormshippingrulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormshippingrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
