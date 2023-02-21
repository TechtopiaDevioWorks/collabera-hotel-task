import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stay-page',
  templateUrl: './stay-page.component.html',
  styleUrls: ['./stay-page.component.scss']
})
export class StayPageComponent implements OnInit, OnDestroy{
  constructor(private route: ActivatedRoute) {}
  currentStay: string|null  = null;
  routeParamSubscription: Subscription | null = null
  ngOnInit(): void {
    this.routeParamSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
      this.currentStay = params.get('stay')
      console.log(this.currentStay)
    })
  }

  ngOnDestroy(): void {
    if(this.routeParamSubscription) {
      this.routeParamSubscription.unsubscribe()
    }
  }
}
