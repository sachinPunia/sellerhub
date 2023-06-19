import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YodellabelsetupComponent } from './yodellabelsetup.component';

describe('YodellabelsetupComponent', () => {
  let component: YodellabelsetupComponent;
  let fixture: ComponentFixture<YodellabelsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YodellabelsetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YodellabelsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
