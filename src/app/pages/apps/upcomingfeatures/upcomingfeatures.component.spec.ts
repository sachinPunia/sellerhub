import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingfeaturesComponent } from './upcomingfeatures.component';

describe('UpcomingfeaturesComponent', () => {
  let component: UpcomingfeaturesComponent;
  let fixture: ComponentFixture<UpcomingfeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingfeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
