import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageInboxPage } from './page-inbox.page';

const routes: Routes = [
  {
    path: '',
    component: PageInboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageInboxPageRoutingModule {}
