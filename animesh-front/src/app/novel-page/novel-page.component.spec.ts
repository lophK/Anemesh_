import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelPageComponent } from './novel-page.component';

describe('NovelPageComponent', () => {
  let component: NovelPageComponent;
  let fixture: ComponentFixture<NovelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovelPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
