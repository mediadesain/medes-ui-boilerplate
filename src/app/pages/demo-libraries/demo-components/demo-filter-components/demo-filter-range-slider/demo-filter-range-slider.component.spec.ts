import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFilterRangeSliderComponent } from './demo-filter-range-slider.component';

describe('DemoFilterFilterRangeSliderComponent', () => {
  let component: DemoFilterRangeSliderComponent;
  let fixture: ComponentFixture<DemoFilterRangeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DemoFilterRangeSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoFilterRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
