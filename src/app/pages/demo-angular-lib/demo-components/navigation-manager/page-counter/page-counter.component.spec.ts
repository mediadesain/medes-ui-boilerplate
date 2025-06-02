import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPageCounterComponent } from './page-counter.component';

describe('DemoPageCounterComponent', () => {
  let component: DemoPageCounterComponent;
  let fixture: ComponentFixture<DemoPageCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPageCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPageCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
