import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadtochannelModelComponent } from './uploadtochannel-model.component';

describe('UploadtochannelModelComponent', () => {
  let component: UploadtochannelModelComponent;
  let fixture: ComponentFixture<UploadtochannelModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadtochannelModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadtochannelModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
