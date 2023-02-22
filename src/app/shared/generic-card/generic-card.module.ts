import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericCardComponent } from './generic-card.component';
import { CoreModule } from '@core/core.module';



@NgModule({
  declarations: [
    GenericCardComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [GenericCardComponent]
})
export class GenericCardModule { }
