import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelcustomerDashboardComponent } from './channelcustomer-dashboard.component';

describe('ChannelcustomerDashboardComponent', () => {
  let component: ChannelcustomerDashboardComponent;
  let fixture: ComponentFixture<ChannelcustomerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelcustomerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelcustomerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
