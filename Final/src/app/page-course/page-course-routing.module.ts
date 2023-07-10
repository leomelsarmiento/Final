import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageCoursePage } from './page-course.page';

const routes: Routes = [
  {
    path: '',
    component: PageCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageCoursePageRoutingModule {}
