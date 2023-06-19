import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuinfoComponent } from './revenuinfo.component';

describe('RevenuinfoComponent', () => {
  let component: RevenuinfoComponent;
  let fixture: ComponentFixture<RevenuinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenuinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
