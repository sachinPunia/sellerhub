import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullfilmentModelComponent } from './fullfilment-model.component';

describe('FullfilmentModelComponent', () => {
  let component: FullfilmentModelComponent;
  let fixture: ComponentFixture<FullfilmentModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullfilmentModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullfilmentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
