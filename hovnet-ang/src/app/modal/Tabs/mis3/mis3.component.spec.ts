import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mis3Component } from './mis3.component';

describe('Mis3Component', () => {
  let component: Mis3Component;
  let fixture: ComponentFixture<Mis3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mis3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mis3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
