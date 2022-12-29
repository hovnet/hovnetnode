import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PirutePorccessComponent } from './pirute-porccess.component';

describe('PirutePorccessComponent', () => {
  let component: PirutePorccessComponent;
  let fixture: ComponentFixture<PirutePorccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PirutePorccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PirutePorccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
