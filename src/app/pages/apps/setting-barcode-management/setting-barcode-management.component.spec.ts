import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingBarcodeManagementComponent } from './setting-barcode-management.component';

describe('SettingBarcodeManagementComponent', () => {
  let component: SettingBarcodeManagementComponent;
  let fixture: ComponentFixture<SettingBarcodeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingBarcodeManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingBarcodeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
