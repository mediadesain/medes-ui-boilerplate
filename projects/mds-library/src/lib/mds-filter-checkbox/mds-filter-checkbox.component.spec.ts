import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdsFilterCheckboxComponent } from './mds-filter-checkbox.component';

describe('MdsFilterCheckboxComponent', () => {
  let component: MdsFilterCheckboxComponent;
  let fixture: ComponentFixture<MdsFilterCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdsFilterCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdsFilterCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
