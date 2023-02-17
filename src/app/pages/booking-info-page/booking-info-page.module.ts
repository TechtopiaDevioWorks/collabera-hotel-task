import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingInfoPageRoutingModule } from './booking-info-page-routing.module';
import { BookingInfoPageComponent } from './booking-info-page.component';
import { LayoutModule } from '@features/layout/layout.module';


@NgModule({
  declarations: [
    BookingInfoPageComponent
  ],
  imports: [
    CommonModule,
    BookingInfoPageRoutingModule,
    LayoutModule
  ]
})
export class BookingInfoPageModule { }
