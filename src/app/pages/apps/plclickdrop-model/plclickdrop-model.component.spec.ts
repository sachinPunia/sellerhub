import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlclickdropModelComponent } from './plclickdrop-model.component';

describe('PlclickdropModelComponent', () => {
  let component: PlclickdropModelComponent;
  let fixture: ComponentFixture<PlclickdropModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlclickdropModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlclickdropModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
