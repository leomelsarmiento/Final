import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageSignupPageRoutingModule } from './page-signup-routing.module';

import { PageSignupPage } from './page-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageSignupPageRoutingModule
  ],
  declarations: [PageSignupPage]
})
export class PageSignupPageModule {}
