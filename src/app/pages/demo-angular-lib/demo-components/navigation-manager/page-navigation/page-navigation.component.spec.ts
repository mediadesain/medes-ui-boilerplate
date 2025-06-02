import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPageNavigationComponent } from './page-navigation.component';

describe('DemoPageNavigationComponent', () => {
  let component: DemoPageNavigationComponent;
  let fixture: ComponentFixture<DemoPageNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPageNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPageNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
