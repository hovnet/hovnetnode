import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimComponent } from './testim.component';

describe('TestimComponent', () => {
  let component: TestimComponent;
  let fixture: ComponentFixture<TestimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
