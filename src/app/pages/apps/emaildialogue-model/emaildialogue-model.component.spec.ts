import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaildialogueModelComponent } from './emaildialogue.component';

describe('EmaildialogueModelComponent', () => {
  let component: EmaildialogueModelComponent;
  let fixture: ComponentFixture<EmaildialogueModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmaildialogueModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmaildialogueModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
