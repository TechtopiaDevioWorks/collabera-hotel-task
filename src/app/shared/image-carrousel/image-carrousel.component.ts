import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carrousel',
  templateUrl: './image-carrousel.component.html',
  styleUrls: ['./image-carrousel.component.scss']
})
export class ImageCarrouselComponent implements OnInit {
  slideIndex = 0;

  constructor() {}

  ngOnInit(): void {

  }

  changeSlide(newIndex: number) {
    this.slideIndex = newIndex;
    if(this.slideIndex < 0) {
      this.slideIndex = 0
    }
  }

}
