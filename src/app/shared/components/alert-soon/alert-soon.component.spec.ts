import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSoonComponent } from './alert-soon.component';

describe('AlertSoonComponent', () => {
  let component: AlertSoonComponent;
  let fixture: ComponentFixture<AlertSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertSoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
