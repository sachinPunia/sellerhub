import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbaytestconnectionModelComponent } from './ebaytestconnection-model.component';

describe('EbaytestconnectionModelComponent', () => {
  let component: EbaytestconnectionModelComponent;
  let fixture: ComponentFixture<EbaytestconnectionModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbaytestconnectionModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbaytestconnectionModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
