import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOrderHistoryComponent } from './report-order-history.component';

describe('ReportOrderHistoryComponent', () => {
  let component: ReportOrderHistoryComponent;
  let fixture: ComponentFixture<ReportOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportOrderHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
