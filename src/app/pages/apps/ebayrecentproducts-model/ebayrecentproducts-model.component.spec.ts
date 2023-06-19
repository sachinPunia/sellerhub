import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbayrecentproductsModelComponent } from './ebayrecentproducts-model.component';

describe('EbayrecentproductsModelComponent', () => {
  let component: EbayrecentproductsModelComponent;
  let fixture: ComponentFixture<EbayrecentproductsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbayrecentproductsModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbayrecentproductsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
