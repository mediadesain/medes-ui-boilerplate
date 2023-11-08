import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutUtilsComponent } from './layout-utils.component';

describe('LayoutUtilsComponent', () => {
  let component: LayoutUtilsComponent;
  let fixture: ComponentFixture<LayoutUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
