import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionPageRoutingModule } from './region-page-routing.module';
import { RegionPageComponent } from './region-page.component';
import { LayoutModule } from '@features/layout/layout.module';
import { CoreModule } from '@core/core.module';
import { DiscoverMoreContainerModule } from '@shared/discover-more-container/discover-more-container.module';


@NgModule({
  declarations: [
    RegionPageComponent
  ],
  imports: [
    CommonModule,
    RegionPageRoutingModule,
    LayoutModule,
    CoreModule,
    DiscoverMoreContainerModule
  ]
})
export class RegionPageModule { }
