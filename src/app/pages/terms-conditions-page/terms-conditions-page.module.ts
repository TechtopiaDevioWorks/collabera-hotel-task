import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsConditionsPageRoutingModule } from './terms-conditions-page-routing.module';
import { TermsConditionsPageComponent } from './terms-conditions-page.component';
import { CoreModule } from '@core/core.module';
import { LayoutModule } from '@features/layout/layout.module';


@NgModule({
  declarations: [
    TermsConditionsPageComponent
  ],
  imports: [
    CommonModule,
    TermsConditionsPageRoutingModule,
    CoreModule,
    LayoutModule,
  ]
})
export class TermsConditionsPageModule { }
