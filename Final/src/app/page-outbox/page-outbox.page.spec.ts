import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageOutboxPage } from './page-outbox.page';

describe('PageOutboxPage', () => {
  let component: PageOutboxPage;
  let fixture: ComponentFixture<PageOutboxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageOutboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
