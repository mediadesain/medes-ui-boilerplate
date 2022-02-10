import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberUtilsComponent } from './number-utils.component';

describe('NumberUtilsComponent', () => {
  let component: NumberUtilsComponent;
  let fixture: ComponentFixture<NumberUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
