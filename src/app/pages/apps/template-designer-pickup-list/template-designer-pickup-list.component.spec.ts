import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDesignerPickupListComponent } from './template-designer-pickup-list.component';

describe('TemplateDesignerPickupListComponent', () => {
  let component: TemplateDesignerPickupListComponent;
  let fixture: ComponentFixture<TemplateDesignerPickupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDesignerPickupListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDesignerPickupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
