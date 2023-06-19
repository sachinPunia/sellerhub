import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notificationsetting0ModelComponent } from './notificationsetting0-model.component';

describe('Notificationsetting0ModelComponent', () => {
  let component: Notificationsetting0ModelComponent;
  let fixture: ComponentFixture<Notificationsetting0ModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notificationsetting0ModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Notificationsetting0ModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
