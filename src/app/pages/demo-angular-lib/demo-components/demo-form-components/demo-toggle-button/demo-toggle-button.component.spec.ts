import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoToggleButtonComponent } from './demo-toggle-button.component';

describe('DemoPageNavigationComponent', () => {
  let component: DemoToggleButtonComponent;
  let fixture: ComponentFixture<DemoToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoToggleButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
