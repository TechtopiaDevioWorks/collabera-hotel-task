import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsPageRoutingModule } from './hotels-page-routing.module';
import { HotelsPageComponent } from './hotels-page.component';
import { LayoutModule } from '@features/layout/layout.module';


@NgModule({
  declarations: [
    HotelsPageComponent
  ],
  imports: [
    CommonModule,
    HotelsPageRoutingModule,
    LayoutModule
  ]
})
export class HotelsPageModule { }
