import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmModelComponent } from './prm-model.component';

describe('PrmModelComponent', () => {
  let component: PrmModelComponent;
  let fixture: ComponentFixture<PrmModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrmModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
