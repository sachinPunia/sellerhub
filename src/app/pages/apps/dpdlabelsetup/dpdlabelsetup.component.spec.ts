import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpdlabelsetupComponent } from './dpdlabelsetup.component';

describe('DpdlabelsetupComponent', () => {
  let component: DpdlabelsetupComponent;
  let fixture: ComponentFixture<DpdlabelsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpdlabelsetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DpdlabelsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
