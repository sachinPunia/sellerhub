import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgorderdetailsModelComponent } from './msgorderdetails-model.component';

describe('MsgorderdetailsModelComponent', () => {
  let component: MsgorderdetailsModelComponent;
  let fixture: ComponentFixture<MsgorderdetailsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgorderdetailsModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgorderdetailsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
