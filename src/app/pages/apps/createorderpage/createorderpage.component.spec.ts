import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateorderpageComponent } from './createorderpage.component';

describe('CreateorderpageComponent', () => {
  let component: CreateorderpageComponent;
  let fixture: ComponentFixture<CreateorderpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateorderpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateorderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
