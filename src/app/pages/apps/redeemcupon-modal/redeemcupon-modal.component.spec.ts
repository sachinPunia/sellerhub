import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemcuponModalComponent } from './redeemcupon-modal.component';

describe('RedeemcuponModalComponent', () => {
  let component: RedeemcuponModalComponent;
  let fixture: ComponentFixture<RedeemcuponModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemcuponModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemcuponModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
