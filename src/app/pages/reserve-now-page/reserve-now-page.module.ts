import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReserveNowPageRoutingModule } from './reserve-now-page-routing.module';
import { ReserveNowPageComponent } from './reserve-now-page.component';
import { LayoutModule } from '@features/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    ReserveNowPageComponent
  ],
  imports: [
    CommonModule,
    ReserveNowPageRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ]
})
export class ReserveNowPageModule { }
