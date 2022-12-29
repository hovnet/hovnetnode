import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mis2Component } from './mis2.component';

describe('Mis2Component', () => {
  let component: Mis2Component;
  let fixture: ComponentFixture<Mis2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mis2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mis2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
