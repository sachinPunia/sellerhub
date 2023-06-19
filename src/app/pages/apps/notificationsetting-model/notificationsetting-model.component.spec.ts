import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsettingModelComponent } from './notificationsetting-model.component';

describe('NotificationsettingModelComponent', () => {
  let component: NotificationsettingModelComponent;
  let fixture: ComponentFixture<NotificationsettingModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsettingModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsettingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
