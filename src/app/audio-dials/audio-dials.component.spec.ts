import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioDialsComponent } from './audio-dials.component';

describe('AudioDialsComponent', () => {
  let component: AudioDialsComponent;
  let fixture: ComponentFixture<AudioDialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioDialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioDialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
