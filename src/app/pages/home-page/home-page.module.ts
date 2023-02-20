import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { LayoutModule } from '@features/layout/layout.module';
import { ImageCarrouselModule } from '@shared/image-carrousel/image-carrousel.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    LayoutModule,
    ImageCarrouselModule
  ]
})
export class HomePageModule { }
