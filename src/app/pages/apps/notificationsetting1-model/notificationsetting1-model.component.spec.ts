import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notificationsetting1ModelComponent } from './notificationsetting1-model.component';

describe('Notificationsetting1ModelComponent', () => {
  let component: Notificationsetting1ModelComponent;
  let fixture: ComponentFixture<Notificationsetting1ModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notificationsetting1ModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Notificationsetting1ModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
