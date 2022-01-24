import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdsDocBoilerplateComponent } from './mds-doc-boilerplate.component';

describe('MdsDocBoilerplateComponent', () => {
  let component: MdsDocBoilerplateComponent;
  let fixture: ComponentFixture<MdsDocBoilerplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdsDocBoilerplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdsDocBoilerplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
