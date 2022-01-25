import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdsFilterDrpopdownComponent } from './mds-filter-drpopdown.component';

describe('MdsFilterDrpopdownComponent', () => {
  let component: MdsFilterDrpopdownComponent;
  let fixture: ComponentFixture<MdsFilterDrpopdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdsFilterDrpopdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdsFilterDrpopdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
