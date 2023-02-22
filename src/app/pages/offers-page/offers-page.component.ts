import { Component, OnInit } from '@angular/core';
import { Offer } from '@core/interfaces/offer';
import { OffersService } from '@core/services/offers.service';

@Component({
  selector: 'app-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.scss']
})
export class OffersPageComponent implements OnInit {
  offersList: Offer[] = [];
  constructor(private _data: OffersService) {
  }
  ngOnInit(): void {
    this.offersList = this._data.getAllOffers();
  }
}
