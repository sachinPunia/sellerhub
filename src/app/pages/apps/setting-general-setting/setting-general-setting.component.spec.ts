import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingGeneralSettingComponent } from './setting-general-setting.component';

describe('SettingGeneralSettingComponent', () => {
  let component: SettingGeneralSettingComponent;
  let fixture: ComponentFixture<SettingGeneralSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingGeneralSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingGeneralSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
