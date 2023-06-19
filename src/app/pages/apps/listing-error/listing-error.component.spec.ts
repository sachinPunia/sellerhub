import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingErrorComponent } from './listing-error.component';

describe('ListingErrorComponent', () => {
  let component: ListingErrorComponent;
  let fixture: ComponentFixture<ListingErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
