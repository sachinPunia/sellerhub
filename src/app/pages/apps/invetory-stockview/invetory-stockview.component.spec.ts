import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvetoryStockviewComponent } from './invetory-stockview.component';

describe('InvetoryStockviewComponent', () => {
  let component: InvetoryStockviewComponent;
  let fixture: ComponentFixture<InvetoryStockviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvetoryStockviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvetoryStockviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
