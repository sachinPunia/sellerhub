import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HermeslabelsetupComponent } from './hermeslabelsetup.component';

describe('HermeslabelsetupComponent', () => {
  let component: HermeslabelsetupComponent;
  let fixture: ComponentFixture<HermeslabelsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HermeslabelsetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HermeslabelsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
