import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNavigationManagerComponent } from './demo-navigation-manager.component';

describe('DemoNavigationManagerComponent', () => {
  let component: DemoNavigationManagerComponent;
  let fixture: ComponentFixture<DemoNavigationManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoNavigationManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNavigationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
