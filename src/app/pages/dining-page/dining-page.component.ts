import { Component, OnInit } from '@angular/core';
import { MinDiningData } from '@core/interfaces/dining';
import { InfoService } from '@core/services/info.service';

@Component({
  selector: 'app-dining-page',
  templateUrl: './dining-page.component.html',
  styleUrls: ['./dining-page.component.scss']
})
export class DiningPageComponent implements OnInit{
  diningOptionList: MinDiningData[] = [];
  constructor(private _info: InfoService) {
  }
  ngOnInit(): void {
    this.diningOptionList = this._info.getAllDiningInfo();
  }
}
