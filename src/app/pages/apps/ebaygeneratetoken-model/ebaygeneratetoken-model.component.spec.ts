import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbaygeneratetokenModelComponent } from './ebaygeneratetoken-model.component';

describe('EbaygeneratetokenModelComponent', () => {
  let component: EbaygeneratetokenModelComponent;
  let fixture: ComponentFixture<EbaygeneratetokenModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbaygeneratetokenModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbaygeneratetokenModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
