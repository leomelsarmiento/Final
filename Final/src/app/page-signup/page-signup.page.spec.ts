import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageSignupPage } from './page-signup.page';

describe('PageSignupPage', () => {
  let component: PageSignupPage;
  let fixture: ComponentFixture<PageSignupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
