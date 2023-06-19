import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingBulkActionsComponent } from './setting-bulk-actions.component';

describe('SettingBulkActionsComponent', () => {
  let component: SettingBulkActionsComponent;
  let fixture: ComponentFixture<SettingBulkActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingBulkActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingBulkActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
