import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageCoursePageRoutingModule } from './page-course-routing.module';

import { PageCoursePage } from './page-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageCoursePageRoutingModule
  ],
  declarations: [PageCoursePage]
})
export class PageCoursePageModule {}
