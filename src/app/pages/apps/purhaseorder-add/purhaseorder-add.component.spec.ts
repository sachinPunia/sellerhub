import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurhaseorderAddComponent } from './purhaseorder-add.component';

describe('PurhaseorderAddComponent', () => {
  let component: PurhaseorderAddComponent;
  let fixture: ComponentFixture<PurhaseorderAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurhaseorderAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurhaseorderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
