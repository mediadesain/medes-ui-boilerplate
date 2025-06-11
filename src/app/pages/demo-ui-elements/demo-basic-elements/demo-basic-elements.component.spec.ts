import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicElementsComponent } from './demo-basic-elements.component';

describe('MdsDocBoilerplateComponent', () => {
  let component: DemoBasicElementsComponent;
  let fixture: ComponentFixture<DemoBasicElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoBasicElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
