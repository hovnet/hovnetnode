import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDComponent } from './template-d.component';

describe('TemplateDComponent', () => {
  let component: TemplateDComponent;
  let fixture: ComponentFixture<TemplateDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
