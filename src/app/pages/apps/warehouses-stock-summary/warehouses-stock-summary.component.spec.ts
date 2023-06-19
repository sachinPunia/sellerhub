import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousesStockSummaryComponent } from './warehouses-stock-summary.component';

describe('WarehousesStockSummaryComponent', () => {
  let component: WarehousesStockSummaryComponent;
  let fixture: ComponentFixture<WarehousesStockSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehousesStockSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehousesStockSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
