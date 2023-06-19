import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulelistingModelComponent } from './schedulelisting-model.component';

describe('SchedulelistingModelComponent', () => {
  let component: SchedulelistingModelComponent;
  let fixture: ComponentFixture<SchedulelistingModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulelistingModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulelistingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
