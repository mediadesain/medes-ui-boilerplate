import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToInstallComponent } from './how-to-install.component';

describe('HowToInstallComponent', () => {
  let component: HowToInstallComponent;
  let fixture: ComponentFixture<HowToInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToInstallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
