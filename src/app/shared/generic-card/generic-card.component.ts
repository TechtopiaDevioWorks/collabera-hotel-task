import { Component, Input } from '@angular/core';
import { RoutingButton } from '@core/interfaces/navigation';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent {
	@Input() heading: string | undefined;
	@Input() subheading: string | undefined;
	@Input() description: string | undefined;
  @Input() description2Old: string | undefined;
  @Input() description2: string | undefined;
	@Input() buttons: RoutingButton[] = [];
	@Input() imgUrl: string | undefined;
}
