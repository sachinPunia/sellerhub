import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtochannelModelComponent } from './addtochannel-model.component';

describe('AddtochannelModelComponent', () => {
  let component: AddtochannelModelComponent;
  let fixture: ComponentFixture<AddtochannelModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtochannelModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtochannelModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
