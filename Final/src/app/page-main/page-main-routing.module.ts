import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageMainPage } from './page-main.page';

const routes: Routes = [
  {
    path: '',
    component: PageMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageMainPageRoutingModule {}
