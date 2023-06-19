import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacklistModelComponent } from './packlist-model.component';

describe('PacklistModelComponent', () => {
  let component: PacklistModelComponent;
  let fixture: ComponentFixture<PacklistModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacklistModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacklistModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
