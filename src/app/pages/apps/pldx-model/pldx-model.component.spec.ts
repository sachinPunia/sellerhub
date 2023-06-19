import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PldxModelComponent } from './pldx-model.component';

describe('PldxModelComponent', () => {
  let component: PldxModelComponent;
  let fixture: ComponentFixture<PldxModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PldxModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PldxModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
