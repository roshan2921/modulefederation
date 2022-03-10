import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMfe1Component } from './home-mfe1.component';

describe('HomeMfe1Component', () => {
  let component: HomeMfe1Component;
  let fixture: ComponentFixture<HomeMfe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMfe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMfe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
