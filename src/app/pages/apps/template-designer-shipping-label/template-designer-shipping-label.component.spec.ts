import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDesignerShippingLabelComponent } from './template-designer-shipping-label.component';

describe('TemplateDesignerShippingLabelComponent', () => {
  let component: TemplateDesignerShippingLabelComponent;
  let fixture: ComponentFixture<TemplateDesignerShippingLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDesignerShippingLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDesignerShippingLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
