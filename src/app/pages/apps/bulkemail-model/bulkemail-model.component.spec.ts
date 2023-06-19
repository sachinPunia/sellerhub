import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkemailModelComponent } from './bulkemail-model.component';

describe('BulkemailModelComponent', () => {
  let component: BulkemailModelComponent;
  let fixture: ComponentFixture<BulkemailModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkemailModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkemailModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
