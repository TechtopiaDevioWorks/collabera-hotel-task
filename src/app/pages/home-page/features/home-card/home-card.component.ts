import { Component, Input } from '@angular/core';
import { Params, Router } from '@angular/router';

@Component({
	selector: 'app-home-card',
	templateUrl: './home-card.component.html',
	styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent {
	@Input() imgUrl: string = '';
	@Input() cardTitle: string = '';
  @Input() cardSubTitle: string = '';
	@Input() url: string = '';
	@Input() urlParams: Params = {};
	constructor(private router: Router) {}

  onCardClick() {
    this.router.navigate([this.url], {queryParams: this.urlParams})
  }
}
