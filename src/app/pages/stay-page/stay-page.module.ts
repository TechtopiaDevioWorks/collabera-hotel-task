import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StayPageRoutingModule } from './stay-page-routing.module';
import { StayPageComponent } from './stay-page.component';
import { LayoutModule } from '@features/layout/layout.module';


@NgModule({
  declarations: [
    StayPageComponent
  ],
  imports: [
    CommonModule,
    StayPageRoutingModule,
    LayoutModule
  ]
})
export class StayPageModule { }
