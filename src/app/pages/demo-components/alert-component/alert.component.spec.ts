import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAlertComponent } from './alert.component';

describe('DemoAlertComponent', () => {
  let component: DemoAlertComponent;
  let fixture: ComponentFixture<DemoAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
