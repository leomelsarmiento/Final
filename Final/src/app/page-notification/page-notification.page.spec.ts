import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotificationPage } from './page-notification.page';

describe('PageNotificationPage', () => {
  let component: PageNotificationPage;
  let fixture: ComponentFixture<PageNotificationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
