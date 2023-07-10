import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageCertificatePageRoutingModule } from './page-certificate-routing.module';

import { PageCertificatePage } from './page-certificate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageCertificatePageRoutingModule
  ],
  declarations: [PageCertificatePage]
})
export class PageCertificatePageModule {}
