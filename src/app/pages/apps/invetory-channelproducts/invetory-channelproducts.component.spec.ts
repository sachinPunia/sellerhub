import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvetoryChannelproductsComponent } from './invetory-channelproducts.component';

describe('InvetoryChannelproductsComponent', () => {
  let component: InvetoryChannelproductsComponent;
  let fixture: ComponentFixture<InvetoryChannelproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvetoryChannelproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvetoryChannelproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
