import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateorderModalComponent } from './createorder-modal.component';

describe('CreateorderModalComponent', () => {
  let component: CreateorderModalComponent;
  let fixture: ComponentFixture<CreateorderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateorderModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateorderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
