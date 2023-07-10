import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageContentPage } from './page-content.page';

describe('PageContentPage', () => {
  let component: PageContentPage;
  let fixture: ComponentFixture<PageContentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
