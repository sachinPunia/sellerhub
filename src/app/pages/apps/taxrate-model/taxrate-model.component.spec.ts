import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxrateModelComponent } from './taxrate-model.component';

describe('TaxrateModelComponent', () => {
  let component: TaxrateModelComponent;
  let fixture: ComponentFixture<TaxrateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxrateModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxrateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
