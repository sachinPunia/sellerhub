import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelschedularjobDashboardComponent } from './channelschedularjob-dashboard.component';

describe('ChannelschedularjobDashboardComponent', () => {
  let component: ChannelschedularjobDashboardComponent;
  let fixture: ComponentFixture<ChannelschedularjobDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelschedularjobDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelschedularjobDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
