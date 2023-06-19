import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnowModelComponent } from './listnow-model.component';

describe('ListnowModelComponent', () => {
  let component: ListnowModelComponent;
  let fixture: ComponentFixture<ListnowModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnowModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnowModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
