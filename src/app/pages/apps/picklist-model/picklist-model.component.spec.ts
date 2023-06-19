import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicklistModelComponent } from './picklist-model.component';

describe('PicklistModelComponent', () => {
  let component: PicklistModelComponent;
  let fixture: ComponentFixture<PicklistModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicklistModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicklistModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
