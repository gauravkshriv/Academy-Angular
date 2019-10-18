import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McqdetailComponent } from './mcqdetail.component';

describe('McqdetailComponent', () => {
  let component: McqdetailComponent;
  let fixture: ComponentFixture<McqdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McqdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
