import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverMoreContainerComponent } from './discover-more-container.component';
import { CoreModule } from '@core/core.module';



@NgModule({
  declarations: [
    DiscoverMoreContainerComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [DiscoverMoreContainerComponent]
})
export class DiscoverMoreContainerModule { }
