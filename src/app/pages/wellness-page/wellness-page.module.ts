import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WellnessPageRoutingModule } from './wellness-page-routing.module';
import { WellnessPageComponent } from './wellness-page.component';
import { LayoutModule } from '@features/layout/layout.module';


@NgModule({
  declarations: [
    WellnessPageComponent
  ],
  imports: [
    CommonModule,
    WellnessPageRoutingModule,
    LayoutModule
  ]
})
export class WellnessPageModule { }
