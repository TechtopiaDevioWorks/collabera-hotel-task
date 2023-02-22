import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactPageComponent } from './contact-page.component';
import { LayoutModule } from '@features/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    LayoutModule,
    ReactiveFormsModule
  ]
})
export class ContactPageModule { }
