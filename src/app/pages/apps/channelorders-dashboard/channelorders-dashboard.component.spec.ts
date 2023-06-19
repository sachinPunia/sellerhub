import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelordersDashboardComponent } from './channelorders-dashboard.component';

describe('ChannelordersDashboardComponent', () => {
  let component: ChannelordersDashboardComponent;
  let fixture: ComponentFixture<ChannelordersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelordersDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelordersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
