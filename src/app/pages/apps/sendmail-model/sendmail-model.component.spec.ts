import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmailModelComponent } from './sendmail-model.component';

describe('SendmailModelComponent', () => {
  let component: SendmailModelComponent;
  let fixture: ComponentFixture<SendmailModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendmailModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmailModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
