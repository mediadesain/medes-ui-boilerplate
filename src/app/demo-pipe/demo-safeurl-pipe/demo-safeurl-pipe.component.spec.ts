import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSafeurlPipeComponent } from './demo-safeurl-pipe.component';

describe('DemoSafeurlPipeComponent', () => {
  let component: DemoSafeurlPipeComponent;
  let fixture: ComponentFixture<DemoSafeurlPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoSafeurlPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoSafeurlPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
