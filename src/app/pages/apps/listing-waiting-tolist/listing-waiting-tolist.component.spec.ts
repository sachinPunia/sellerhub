import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingWaitingTolistComponent } from './listing-waiting-tolist.component';

describe('ListingWaitingTolistComponent', () => {
  let component: ListingWaitingTolistComponent;
  let fixture: ComponentFixture<ListingWaitingTolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingWaitingTolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingWaitingTolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
