import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReserveNowPageRoutingModule } from './reserve-now-page-routing.module';
import { ReserveNowPageComponent } from './reserve-now-page.component';
import { LayoutModule } from '@features/layout/layout.module';


@NgModule({
  declarations: [
    ReserveNowPageComponent
  ],
  imports: [
    CommonModule,
    ReserveNowPageRoutingModule,
    LayoutModule
  ]
})
export class ReserveNowPageModule { }
