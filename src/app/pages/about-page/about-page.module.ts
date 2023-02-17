import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';
import { LayoutModule } from '@features/layout/layout.module';

@NgModule({
	declarations: [AboutPageComponent],
	imports: [CommonModule, AboutPageRoutingModule, LayoutModule],
})
export class AboutPageModule {}
