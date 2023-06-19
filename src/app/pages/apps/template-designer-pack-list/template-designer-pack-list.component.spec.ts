import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDesignerPackListComponent } from './template-designer-pack-list.component';

describe('TemplateDesignerPackListComponent', () => {
  let component: TemplateDesignerPackListComponent;
  let fixture: ComponentFixture<TemplateDesignerPackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDesignerPackListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDesignerPackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
