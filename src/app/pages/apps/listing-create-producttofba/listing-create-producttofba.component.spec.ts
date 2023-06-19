import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCreateProducttofbaComponent } from './listing-create-producttofba.component';

describe('ListingCreateProducttofbaComponent', () => {
  let component: ListingCreateProducttofbaComponent;
  let fixture: ComponentFixture<ListingCreateProducttofbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingCreateProducttofbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingCreateProducttofbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
