import { Component } from '@angular/core';
import { Carrer } from '@core/interfaces/carrer';
import { CarrerService } from '@core/services/carrer.service';

@Component({
  selector: 'app-carrers-page',
  templateUrl: './carrers-page.component.html',
  styleUrls: ['./carrers-page.component.scss']
})
export class CarrersPageComponent {
  carrersList: Carrer[] = [];
  constructor(private _data: CarrerService) {
  }
  ngOnInit(): void {
    this.carrersList = this._data.getAllCarrers();
  }
}
