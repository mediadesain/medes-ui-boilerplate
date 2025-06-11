import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSwatchComponent } from './demo-swatch.component';

describe('SwatchComponent', () => {
  let component: DemoSwatchComponent;
  let fixture: ComponentFixture<DemoSwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoSwatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
