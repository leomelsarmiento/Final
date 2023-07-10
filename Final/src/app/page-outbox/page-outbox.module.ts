import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageOutboxPageRoutingModule } from './page-outbox-routing.module';

import { PageOutboxPage } from './page-outbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageOutboxPageRoutingModule
  ],
  declarations: [PageOutboxPage]
})
export class PageOutboxPageModule {}
