import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmessageModalComponent } from './viewmessage-modal.component';

describe('ViewmessageModalComponent', () => {
  let component: ViewmessageModalComponent;
  let fixture: ComponentFixture<ViewmessageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmessageModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmessageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
