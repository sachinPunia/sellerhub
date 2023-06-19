import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidModelComponent } from './paid-model.component';

describe('PaidModelComponent', () => {
  let component: PaidModelComponent;
  let fixture: ComponentFixture<PaidModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
