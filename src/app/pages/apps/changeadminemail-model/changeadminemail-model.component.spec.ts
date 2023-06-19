import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeadminemailModelComponent } from './changeadminemail-model.component';

describe('ChangeadminemailModelComponent', () => {
  let component: ChangeadminemailModelComponent;
  let fixture: ComponentFixture<ChangeadminemailModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeadminemailModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeadminemailModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
