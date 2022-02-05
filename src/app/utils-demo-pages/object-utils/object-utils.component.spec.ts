import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectUtilsComponent } from './object-utils.component';

describe('ObjectUtilsComponent', () => {
  let component: ObjectUtilsComponent;
  let fixture: ComponentFixture<ObjectUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
