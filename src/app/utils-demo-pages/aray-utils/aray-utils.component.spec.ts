import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArayUtilsComponent } from './aray-utils.component';

describe('ArayUtilsComponent', () => {
  let component: ArayUtilsComponent;
  let fixture: ComponentFixture<ArayUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArayUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArayUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
