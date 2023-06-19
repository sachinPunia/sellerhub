import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingClosedProductComponent } from './listing-closed-product.component';

describe('ListingClosedProductComponent', () => {
  let component: ListingClosedProductComponent;
  let fixture: ComponentFixture<ListingClosedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingClosedProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingClosedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
