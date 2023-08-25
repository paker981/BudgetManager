import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMonthComponent } from './view-month.component';

describe('ViewMonthComponent', () => {
  let component: ViewMonthComponent;
  let fixture: ComponentFixture<ViewMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMonthComponent]
    });
    fixture = TestBed.createComponent(ViewMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
