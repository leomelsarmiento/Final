import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotificationPage } from './page-notification.page';

const routes: Routes = [
  {
    path: '',
    component: PageNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageNotificationPageRoutingModule {}
