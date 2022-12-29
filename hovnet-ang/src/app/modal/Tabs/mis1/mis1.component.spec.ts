import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mis1Component } from './mis1.component';

describe('Mis1Component', () => {
  let component: Mis1Component;
  let fixture: ComponentFixture<Mis1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mis1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mis1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
