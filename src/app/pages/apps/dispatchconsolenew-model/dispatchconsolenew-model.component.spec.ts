import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchconsolenewModelComponent } from './dispatchconsolenew-model.component';

describe('DispatchconsolenewModelComponent', () => {
  let component: DispatchconsolenewModelComponent;
  let fixture: ComponentFixture<DispatchconsolenewModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchconsolenewModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchconsolenewModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
