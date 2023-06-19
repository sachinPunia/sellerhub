import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingInventorySyncronizeComponent } from './setting-inventory-syncronize.component';

describe('SettingInventorySyncronizeComponent', () => {
  let component: SettingInventorySyncronizeComponent;
  let fixture: ComponentFixture<SettingInventorySyncronizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingInventorySyncronizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingInventorySyncronizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
