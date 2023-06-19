import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyconverterModelComponent } from './currencyconverter-model.component';

describe('CurrencyconverterModelComponent', () => {
  let component: CurrencyconverterModelComponent;
  let fixture: ComponentFixture<CurrencyconverterModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyconverterModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyconverterModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
