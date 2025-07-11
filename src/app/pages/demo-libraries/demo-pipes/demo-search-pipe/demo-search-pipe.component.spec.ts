import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSearchPipeComponent } from './demo-search-pipe.component';

describe('DemoSearchPipeComponent', () => {
  let component: DemoSearchPipeComponent;
  let fixture: ComponentFixture<DemoSearchPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoSearchPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoSearchPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
