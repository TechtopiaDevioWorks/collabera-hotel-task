import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiningInfoPageRoutingModule } from './dining-info-page-routing.module';
import { DiningInfoPageComponent } from './dining-info-page.component';
import { LayoutModule } from '@features/layout/layout.module';
import { DiscoverMoreContainerModule } from '@shared/discover-more-container/discover-more-container.module';


@NgModule({
  declarations: [
    DiningInfoPageComponent
  ],
  imports: [
    CommonModule,
    DiningInfoPageRoutingModule,
    LayoutModule,
    DiscoverMoreContainerModule
  ],
})
export class DiningInfoPageModule { }
