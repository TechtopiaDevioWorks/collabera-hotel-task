import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCarrouselComponent } from './image-carrousel.component';


@NgModule({
  declarations: [ImageCarrouselComponent],
  imports: [
    CommonModule
  ],
  exports: [ImageCarrouselComponent]
})
export class ImageCarrouselModule { }
