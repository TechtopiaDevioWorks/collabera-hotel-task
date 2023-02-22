import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DiningData } from '@core/interfaces/dining';
import { InfoService } from '@core/services/info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dining-info-page',
  templateUrl: './dining-info-page.component.html',
  styleUrls: ['./dining-info-page.component.scss']
})
export class DiningInfoPageComponent {
  constructor(private route: ActivatedRoute, private _info: InfoService) {}
  currentDining: string|null  = null;
  routeParamSubscription: Subscription | null = null
  currentDiningData: DiningData | undefined;

  ngOnInit(): void {
    this.routeParamSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
      this.currentDining = params.get('diningoption')
      if (this.currentDining) {
        this.currentDiningData = this._info.getDiningInfo(this.currentDining);
      } else {
        this.currentDiningData = undefined;
      }
    })
  }

  ngOnDestroy(): void {
    if(this.routeParamSubscription) {
      this.routeParamSubscription.unsubscribe()
    }
  }
}
