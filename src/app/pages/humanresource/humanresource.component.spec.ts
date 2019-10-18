import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanresourceComponent } from './humanresource.component';

describe('HumanresourceComponent', () => {
  let component: HumanresourceComponent;
  let fixture: ComponentFixture<HumanresourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanresourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
