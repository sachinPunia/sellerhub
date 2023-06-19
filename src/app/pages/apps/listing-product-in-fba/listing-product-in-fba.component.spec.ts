import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingProductInFbaComponent } from './listing-product-in-fba.component';

describe('ListingProductInFbaComponent', () => {
  let component: ListingProductInFbaComponent;
  let fixture: ComponentFixture<ListingProductInFbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingProductInFbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingProductInFbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
