import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageInboxPage } from './page-inbox.page';

describe('PageInboxPage', () => {
  let component: PageInboxPage;
  let fixture: ComponentFixture<PageInboxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageInboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
