import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSignupPage } from './page-signup.page';

const routes: Routes = [
  {
    path: '',
    component: PageSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageSignupPageRoutingModule {}
