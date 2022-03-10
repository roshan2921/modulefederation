import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMfe2Component } from './home-mfe2.component';

describe('HomeMfe2Component', () => {
  let component: HomeMfe2Component;
  let fixture: ComponentFixture<HomeMfe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMfe2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMfe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
