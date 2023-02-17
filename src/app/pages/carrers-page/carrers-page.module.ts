import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrersPageRoutingModule } from './carrers-page-routing.module';
import { CarrersPageComponent } from './carrers-page.component';
import { LayoutModule } from '@features/layout/layout.module';


@NgModule({
  declarations: [
    CarrersPageComponent
  ],
  imports: [
    CommonModule,
    CarrersPageRoutingModule,
    LayoutModule
  ]
})
export class CarrersPageModule { }
