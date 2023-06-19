import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationChannelIntegrationComponent } from './integration-channel-integration.component';

describe('IntegrationChannelIntegrationComponent', () => {
  let component: IntegrationChannelIntegrationComponent;
  let fixture: ComponentFixture<IntegrationChannelIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationChannelIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationChannelIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
