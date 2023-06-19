import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HermessettingsComponent } from './hermessettings.component';

describe('HermessettingsComponent', () => {
  let component: HermessettingsComponent;
  let fixture: ComponentFixture<HermessettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HermessettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HermessettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
