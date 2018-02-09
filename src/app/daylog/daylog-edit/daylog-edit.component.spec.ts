import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaylogEditComponent } from './daylog-edit.component';

describe('DaylogEditComponent', () => {
  let component: DaylogEditComponent;
  let fixture: ComponentFixture<DaylogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaylogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaylogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
