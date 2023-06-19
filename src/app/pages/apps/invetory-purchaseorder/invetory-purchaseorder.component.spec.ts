import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvetoryPurchaseorderComponent } from './invetory-purchaseorder.component';

describe('InvetoryPurchaseorderComponent', () => {
  let component: InvetoryPurchaseorderComponent;
  let fixture: ComponentFixture<InvetoryPurchaseorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvetoryPurchaseorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvetoryPurchaseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
