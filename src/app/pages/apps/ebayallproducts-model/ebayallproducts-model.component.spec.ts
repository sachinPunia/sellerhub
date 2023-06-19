import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbayallproductsModelComponent } from './ebayallproducts-model.component';

describe('EbayallproductsModelComponent', () => {
  let component: EbayallproductsModelComponent;
  let fixture: ComponentFixture<EbayallproductsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbayallproductsModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbayallproductsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
