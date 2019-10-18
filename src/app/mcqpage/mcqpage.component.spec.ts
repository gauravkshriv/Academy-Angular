import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McqpageComponent } from './mcqpage.component';

describe('McqpageComponent', () => {
  let component: McqpageComponent;
  let fixture: ComponentFixture<McqpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McqpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
