import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInputNumberComponent } from './input-number.component';

describe('DemoPageCounterComponent', () => {
  let component: DemoInputNumberComponent;
  let fixture: ComponentFixture<DemoInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoInputNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
