import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageOutboxPage } from './page-outbox.page';

const routes: Routes = [
  {
    path: '',
    component: PageOutboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageOutboxPageRoutingModule {}
