import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockValueReportComponent } from './stock-value-report.component';

describe('StockValueReportComponent', () => {
  let component: StockValueReportComponent;
  let fixture: ComponentFixture<StockValueReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockValueReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockValueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
