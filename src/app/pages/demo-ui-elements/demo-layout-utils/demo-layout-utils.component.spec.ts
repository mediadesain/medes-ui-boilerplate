import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLayoutUtilsComponent } from './demo-layout-utils.component';

describe('LayoutUtilsComponent', () => {
  let component: DemoLayoutUtilsComponent;
  let fixture: ComponentFixture<DemoLayoutUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoLayoutUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLayoutUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
