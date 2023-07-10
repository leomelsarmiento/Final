import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageMainPage } from './page-main.page';

describe('PageMainPage', () => {
  let component: PageMainPage;
  let fixture: ComponentFixture<PageMainPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
