import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { LayoutModule } from '@features/layout/layout.module';
import { HomeCardComponent } from './features/home-card/home-card.component';


@NgModule({
  declarations: [HomePageComponent, HomeCardComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    LayoutModule,
  ]
})
export class HomePageModule { }
