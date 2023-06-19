import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchconsoleModelComponent } from './dispatchconsole-model.component';

describe('DispatchconsoleModelComponent', () => {
  let component: DispatchconsoleModelComponent;
  let fixture: ComponentFixture<DispatchconsoleModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchconsoleModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchconsoleModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
