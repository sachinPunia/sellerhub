import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDesignerInvoiceComponent } from './template-designer-invoice.component';

describe('TemplateDesignerInvoiceComponent', () => {
  let component: TemplateDesignerInvoiceComponent;
  let fixture: ComponentFixture<TemplateDesignerInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDesignerInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDesignerInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
