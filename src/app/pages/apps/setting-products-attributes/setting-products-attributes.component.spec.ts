import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingProductsAttributesComponent } from './setting-products-attributes.component';

describe('SettingProductsAttributesComponent', () => {
  let component: SettingProductsAttributesComponent;
  let fixture: ComponentFixture<SettingProductsAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingProductsAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingProductsAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
