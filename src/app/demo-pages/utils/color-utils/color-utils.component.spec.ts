import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorUtilsComponent } from './color-utils.component';

describe('ColorUtilsComponent', () => {
  let component: ColorUtilsComponent;
  let fixture: ComponentFixture<ColorUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
