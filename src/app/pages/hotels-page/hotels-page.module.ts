import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsPageRoutingModule } from './hotels-page-routing.module';
import { HotelsPageComponent } from './hotels-page.component';
import { LayoutModule } from '@features/layout/layout.module';
import { DiscoverMoreContainerModule } from '@shared/discover-more-container/discover-more-container.module';


@NgModule({
  declarations: [
    HotelsPageComponent
  ],
  imports: [
    CommonModule,
    HotelsPageRoutingModule,
    LayoutModule,
    DiscoverMoreContainerModule
  ]
})
export class HotelsPageModule { }
