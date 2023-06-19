import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportcsvModelComponent } from './exportcsv-model.component';

describe('ExportcsvModelComponent', () => {
  let component: ExportcsvModelComponent;
  let fixture: ComponentFixture<ExportcsvModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportcsvModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportcsvModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
