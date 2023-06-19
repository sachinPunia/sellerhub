import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelorderModelComponent } from './cancelorder-model.component';

describe('CancelorderModelComponent', () => {
  let component: CancelorderModelComponent;
  let fixture: ComponentFixture<CancelorderModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelorderModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelorderModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
