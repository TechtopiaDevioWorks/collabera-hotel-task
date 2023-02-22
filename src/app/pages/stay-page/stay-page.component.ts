import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { InfoService } from '@core/services/info.service';
import { StayData } from '@core/interfaces/hotel';

@Component({
  selector: 'app-stay-page',
  templateUrl: './stay-page.component.html',
  styleUrls: ['./stay-page.component.scss']
})
export class StayPageComponent implements OnInit, OnDestroy{
  constructor(private route: ActivatedRoute, private _info: InfoService) {}
  currentStay: string|null  = null;
  routeParamSubscription: Subscription | null = null
  currentStayData: StayData | undefined;

  ngOnInit(): void {
    this.routeParamSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
      this.currentStay = params.get('stay')
      if (this.currentStay) {
        this.currentStayData = this._info.getStayInfo(this.currentStay);
      } else {
        this.currentStayData = undefined;
      }
      console.log(this.currentStayData)
    })
  }

  ngOnDestroy(): void {
    if(this.routeParamSubscription) {
      this.routeParamSubscription.unsubscribe()
    }
  }
}
