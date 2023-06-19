import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlyodelModelComponent } from './plyodel-model.component';

describe('PlyodelModelComponent', () => {
  let component: PlyodelModelComponent;
  let fixture: ComponentFixture<PlyodelModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlyodelModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlyodelModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
