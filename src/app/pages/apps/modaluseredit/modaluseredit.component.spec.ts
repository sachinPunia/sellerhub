import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalusereditComponent } from './modaluseredit.component';

describe('ModalusereditComponent', () => {
  let component: ModalusereditComponent;
  let fixture: ComponentFixture<ModalusereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalusereditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalusereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
