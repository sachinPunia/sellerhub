import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbayIntegrationComponent } from './ebay-integration.component';

describe('EbayIntegrationComponent', () => {
  let component: EbayIntegrationComponent;
  let fixture: ComponentFixture<EbayIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbayIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbayIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
