import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaluserpermissionComponent } from './modaluserpermission.component';

describe('ModaluserpermissionComponent', () => {
  let component: ModaluserpermissionComponent;
  let fixture: ComponentFixture<ModaluserpermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaluserpermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaluserpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
