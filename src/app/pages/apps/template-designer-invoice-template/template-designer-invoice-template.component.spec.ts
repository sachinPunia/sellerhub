import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDesignerInvoiceTemplateComponent } from './template-designer-invoice-template.component';

describe('TemplateDesignerInvoiceTemplateComponent', () => {
  let component: TemplateDesignerInvoiceTemplateComponent;
  let fixture: ComponentFixture<TemplateDesignerInvoiceTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDesignerInvoiceTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDesignerInvoiceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
