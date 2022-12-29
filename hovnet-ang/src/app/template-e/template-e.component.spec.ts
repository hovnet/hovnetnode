import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEComponent } from './template-e.component';

describe('TemplateEComponent', () => {
  let component: TemplateEComponent;
  let fixture: ComponentFixture<TemplateEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
