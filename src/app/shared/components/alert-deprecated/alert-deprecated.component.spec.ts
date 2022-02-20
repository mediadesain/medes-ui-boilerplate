import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDeprecatedComponent } from './alert-deprecated.component';

describe('AlertDeprecatedComponent', () => {
  let component: AlertDeprecatedComponent;
  let fixture: ComponentFixture<AlertDeprecatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDeprecatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDeprecatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
