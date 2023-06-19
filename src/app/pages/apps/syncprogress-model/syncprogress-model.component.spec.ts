import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncprogressModelComponent } from './syncprogress-model.component';

describe('SyncprogressModelComponent', () => {
  let component: SyncprogressModelComponent;
  let fixture: ComponentFixture<SyncprogressModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncprogressModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncprogressModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
