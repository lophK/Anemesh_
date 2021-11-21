import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeshHomePageComponent } from './animesh-home-page.component';

describe('AnimeshHomePageComponent', () => {
  let component: AnimeshHomePageComponent;
  let fixture: ComponentFixture<AnimeshHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeshHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeshHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
