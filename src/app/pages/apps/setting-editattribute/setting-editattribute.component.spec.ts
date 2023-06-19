import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingEditattributeComponent } from './setting-editattribute.component';

describe('SettingEditattributeComponent', () => {
  let component: SettingEditattributeComponent;
  let fixture: ComponentFixture<SettingEditattributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingEditattributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingEditattributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
