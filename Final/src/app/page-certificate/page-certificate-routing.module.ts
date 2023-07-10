import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageCertificatePage } from './page-certificate.page';

const routes: Routes = [
  {
    path: '',
    component: PageCertificatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageCertificatePageRoutingModule {}
