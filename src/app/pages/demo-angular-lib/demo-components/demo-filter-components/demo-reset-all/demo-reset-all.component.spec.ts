import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoResetAllComponent } from './demo-reset-all.component';

describe('ResetAllComponent', () => {
  let component: DemoResetAllComponent;
  let fixture: ComponentFixture<DemoResetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoResetAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoResetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
