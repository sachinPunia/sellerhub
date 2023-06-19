import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalmaillabelsetupComponent } from './royalmaillabelsetup.component';

describe('RoyalmaillabelsetupComponent', () => {
  let component: RoyalmaillabelsetupComponent;
  let fixture: ComponentFixture<RoyalmaillabelsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyalmaillabelsetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalmaillabelsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
