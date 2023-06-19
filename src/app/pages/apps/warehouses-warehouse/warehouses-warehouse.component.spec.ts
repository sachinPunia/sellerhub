import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousesWarehouseComponent } from './warehouses-warehouse.component';

describe('WarehousesWarehouseComponent', () => {
  let component: WarehousesWarehouseComponent;
  let fixture: ComponentFixture<WarehousesWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehousesWarehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehousesWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
