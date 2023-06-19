import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingChannelScheduleComponent } from './listing-channel-schedule.component';

describe('ListingChannelScheduleComponent', () => {
  let component: ListingChannelScheduleComponent;
  let fixture: ComponentFixture<ListingChannelScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingChannelScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingChannelScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
