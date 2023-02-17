import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiningPageRoutingModule } from './dining-page-routing.module';
import { DiningPageComponent } from './dining-page.component';
import { LayoutModule } from '@features/layout/layout.module';


@NgModule({
  declarations: [
    DiningPageComponent
  ],
  imports: [
    CommonModule,
    DiningPageRoutingModule,
    LayoutModule
  ]
})
export class DiningPageModule { }
