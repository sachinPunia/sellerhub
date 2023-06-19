import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormwarehouseComponent } from './formwarehouse.component';

describe('FormwarehouseComponent', () => {
  let component: FormwarehouseComponent;
  let fixture: ComponentFixture<FormwarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormwarehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormwarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
