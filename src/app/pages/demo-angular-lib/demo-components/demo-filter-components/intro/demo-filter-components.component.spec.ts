import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFilterComponentsComponent } from './demo-filter-components.component';

describe('FilterComponentsComponent', () => {
  let component: DemoFilterComponentsComponent;
  let fixture: ComponentFixture<DemoFilterComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFilterComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFilterComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
