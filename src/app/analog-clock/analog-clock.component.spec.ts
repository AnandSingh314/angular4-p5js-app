import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P5ClockComponent } from './analog-clock.component';

describe('P5ClockComponent', () => {
  let component: P5ClockComponent;
  let fixture: ComponentFixture<P5ClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P5ClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P5ClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
