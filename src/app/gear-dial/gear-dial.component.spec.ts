import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearDialComponent } from './gear-dial.component';

describe('GearDialComponent', () => {
  let component: GearDialComponent;
  let fixture: ComponentFixture<GearDialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearDialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
