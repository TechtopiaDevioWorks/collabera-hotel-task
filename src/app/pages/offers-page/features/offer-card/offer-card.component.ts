import { Component, Input } from '@angular/core';
import { RoutingButton } from '@core/interfaces/navigation';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent {
	@Input() heading: string | undefined;
	@Input() subheading: string | undefined;
	@Input() description: string | undefined;
  @Input() description2Old: string | undefined;
  @Input() description2: string | undefined;
	@Input() buttons: RoutingButton[] = [];
	@Input() imgUrl: string | undefined;
}

