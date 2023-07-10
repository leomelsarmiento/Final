import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageCertificatePage } from './page-certificate.page';

describe('PageCertificatePage', () => {
  let component: PageCertificatePage;
  let fixture: ComponentFixture<PageCertificatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageCertificatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
