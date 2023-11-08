import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponentDetailComponent } from './modal-component-detail.component';

describe('ModalComponentDetailComponent', () => {
  let component: ModalComponentDetailComponent;
  let fixture: ComponentFixture<ModalComponentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
