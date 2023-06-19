import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvetoryProductsComponent } from './invetory-products.component';

describe('InvetoryProductsComponent', () => {
  let component: InvetoryProductsComponent;
  let fixture: ComponentFixture<InvetoryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvetoryProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvetoryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
