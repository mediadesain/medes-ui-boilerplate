import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismjsHighlightComponent } from './demo-prismjs-highlight.component';

describe('PrismjsHighlightComponent', () => {
  let component: PrismjsHighlightComponent;
  let fixture: ComponentFixture<PrismjsHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrismjsHighlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismjsHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
