import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionscancelModelComponent } from './subscriptionscancel-model.component';

describe('SubscriptionscancelModelComponent', () => {
  let component: SubscriptionscancelModelComponent;
  let fixture: ComponentFixture<SubscriptionscancelModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionscancelModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionscancelModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
