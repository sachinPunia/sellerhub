import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelproductsModelComponent } from './channelproducts-model.component';

describe('ChannelproductsModelComponent', () => {
  let component: ChannelproductsModelComponent;
  let fixture: ComponentFixture<ChannelproductsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelproductsModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelproductsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
