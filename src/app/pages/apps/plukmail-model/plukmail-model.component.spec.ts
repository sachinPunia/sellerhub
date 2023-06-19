import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlukmailModelComponent } from './plukmail-model.component';

describe('PlukmailModelComponent', () => {
  let component: PlukmailModelComponent;
  let fixture: ComponentFixture<PlukmailModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlukmailModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlukmailModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
