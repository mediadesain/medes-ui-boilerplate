import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoImageLoaderComponent } from './demo-image-loader.component';

describe('ImageLoaderComponent', () => {
  let component: DemoImageLoaderComponent;
  let fixture: ComponentFixture<DemoImageLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoImageLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoImageLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
