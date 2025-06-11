import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGridSystemComponent } from './demo-grid-system.component';

describe('GridSystemComponent', () => {
  let component: DemoGridSystemComponent;
  let fixture: ComponentFixture<DemoGridSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoGridSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoGridSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
