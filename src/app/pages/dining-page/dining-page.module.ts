import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiningPageRoutingModule } from './dining-page-routing.module';
import { DiningPageComponent } from './dining-page.component';
import { LayoutModule } from '@features/layout/layout.module';
import { DiscoverMoreContainerModule } from '@shared/discover-more-container/discover-more-container.module';


@NgModule({
  declarations: [
    DiningPageComponent
  ],
  imports: [
    CommonModule,
    DiningPageRoutingModule,
    LayoutModule,
    DiscoverMoreContainerModule
  ]
})
export class DiningPageModule { }
