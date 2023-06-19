import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageproductModelComponent } from './manageproduct-model.component';

describe('ManageproductModelComponent', () => {
  let component: ManageproductModelComponent;
  let fixture: ComponentFixture<ManageproductModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageproductModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageproductModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
