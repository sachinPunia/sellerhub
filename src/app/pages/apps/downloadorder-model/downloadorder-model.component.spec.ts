import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadorderModelComponent } from './downloadorder-model.component';

describe('DownloadorderModelComponent', () => {
  let component: DownloadorderModelComponent;
  let fixture: ComponentFixture<DownloadorderModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadorderModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadorderModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
