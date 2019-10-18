import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiccourseComponent } from './basiccourse.component';

describe('BasiccourseComponent', () => {
  let component: BasiccourseComponent;
  let fixture: ComponentFixture<BasiccourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasiccourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasiccourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
