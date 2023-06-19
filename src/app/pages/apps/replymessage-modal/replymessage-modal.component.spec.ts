import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplymessageModalComponent } from './replymessage-modal.component';

describe('ReplymessageModalComponent', () => {
  let component: ReplymessageModalComponent;
  let fixture: ComponentFixture<ReplymessageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplymessageModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplymessageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
