import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherModelComponent } from './other-model.component';

describe('OtherModelComponent', () => {
  let component: OtherModelComponent;
  let fixture: ComponentFixture<OtherModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
