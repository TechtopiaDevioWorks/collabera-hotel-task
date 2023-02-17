import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersPageRoutingModule } from './offers-page-routing.module';
import { OffersPageComponent } from './offers-page.component';
import { LayoutModule } from '@features/layout/layout.module';

@NgModule({
  declarations: [OffersPageComponent],
  imports: [
    CommonModule,
    OffersPageRoutingModule,
    LayoutModule
  ],
})
export class OffersPageModule { }
