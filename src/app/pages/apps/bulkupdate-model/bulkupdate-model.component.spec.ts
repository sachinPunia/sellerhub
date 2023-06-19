import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkupdateModelComponent } from './bulkupdate-model.component';

describe('BulkupdateModelComponent', () => {
  let component: BulkupdateModelComponent;
  let fixture: ComponentFixture<BulkupdateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkupdateModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkupdateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
