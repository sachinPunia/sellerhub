import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesupportModalComponent } from './phonesupport-modal.component';

describe('PhonesupportModalComponent', () => {
  let component: PhonesupportModalComponent;
  let fixture: ComponentFixture<PhonesupportModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonesupportModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesupportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
