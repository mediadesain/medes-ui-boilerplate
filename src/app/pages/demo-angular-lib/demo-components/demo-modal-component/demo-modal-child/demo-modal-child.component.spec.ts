import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoModalChildComponent } from './demo-modal-child.component';

describe('DemoModalComponent', () => {
  let component: DemoModalChildComponent;
  let fixture: ComponentFixture<DemoModalChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoModalChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoModalChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
