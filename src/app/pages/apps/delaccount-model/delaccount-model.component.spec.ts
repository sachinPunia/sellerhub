import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelaccountModelComponent } from './delaccount-model.component';

describe('DelaccountModelComponent', () => {
  let component: DelaccountModelComponent;
  let fixture: ComponentFixture<DelaccountModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelaccountModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelaccountModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
