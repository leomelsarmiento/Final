import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageNotificationPageRoutingModule } from './page-notification-routing.module';

import { PageNotificationPage } from './page-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageNotificationPageRoutingModule
  ],
  declarations: [PageNotificationPage]
})
export class PageNotificationPageModule {}
