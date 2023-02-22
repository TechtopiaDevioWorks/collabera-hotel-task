import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StayPageRoutingModule } from './stay-page-routing.module';
import { StayPageComponent } from './stay-page.component';
import { LayoutModule } from '@features/layout/layout.module';
import { CoreModule } from '@core/core.module';
import { DiscoverMoreContainerModule } from '@shared/discover-more-container/discover-more-container.module';


@NgModule({
  declarations: [
    StayPageComponent
  ],
  imports: [
    CommonModule,
    StayPageRoutingModule,
    LayoutModule,
    CoreModule,
    DiscoverMoreContainerModule
  ]
})
export class StayPageModule { }
