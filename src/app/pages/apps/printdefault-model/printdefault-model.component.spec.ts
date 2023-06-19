import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintdefaultModelComponent } from './printdefault-model.component';

describe('PrintdefaultModelComponent', () => {
  let component: PrintdefaultModelComponent;
  let fixture: ComponentFixture<PrintdefaultModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintdefaultModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintdefaultModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
