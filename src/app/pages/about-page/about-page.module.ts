import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';
import { LayoutModule } from '@features/layout/layout.module';
import { DiscoverMoreContainerModule } from '@shared/discover-more-container/discover-more-container.module';
import { CoreModule } from '@core/core.module';

@NgModule({
	declarations: [AboutPageComponent],
	imports: [CommonModule, AboutPageRoutingModule, LayoutModule, DiscoverMoreContainerModule, CoreModule],
})
export class AboutPageModule {}
