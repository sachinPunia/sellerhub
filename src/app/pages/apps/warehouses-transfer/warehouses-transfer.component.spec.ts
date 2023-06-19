import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousesTransferComponent } from './warehouses-transfer.component';

describe('WarehousesTransferComponent', () => {
  let component: WarehousesTransferComponent;
  let fixture: ComponentFixture<WarehousesTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehousesTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehousesTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
