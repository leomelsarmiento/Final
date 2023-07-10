import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageCoursePage } from './page-course.page';

describe('PageCoursePage', () => {
  let component: PageCoursePage;
  let fixture: ComponentFixture<PageCoursePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
