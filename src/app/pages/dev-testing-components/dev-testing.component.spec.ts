import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevTestingComponent } from './dev-testing.component';

describe('DemoTestingComponent', () => {
  let component: DevTestingComponent;
  let fixture: ComponentFixture<DevTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
