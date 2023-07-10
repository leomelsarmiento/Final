import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageInboxPageRoutingModule } from './page-inbox-routing.module';

import { PageInboxPage } from './page-inbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageInboxPageRoutingModule
  ],
  declarations: [PageInboxPage]
})
export class PageInboxPageModule {}
