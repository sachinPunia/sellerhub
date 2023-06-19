import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSendProducttofbaComponent } from './listing-send-producttofba.component';

describe('ListingSendProducttofbaComponent', () => {
  let component: ListingSendProducttofbaComponent;
  let fixture: ComponentFixture<ListingSendProducttofbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingSendProducttofbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSendProducttofbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
