import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingListedProductComponent } from './listing-listed-product.component';

describe('ListingListedProductComponent', () => {
  let component: ListingListedProductComponent;
  let fixture: ComponentFixture<ListingListedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingListedProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingListedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
