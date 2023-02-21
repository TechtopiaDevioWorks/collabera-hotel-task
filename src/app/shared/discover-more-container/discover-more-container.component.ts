import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'app-discover-more-container',
	templateUrl: './discover-more-container.component.html',
	styleUrls: ['./discover-more-container.component.scss'],
})
export class DiscoverMoreContainerComponent {
	@Input() textLocation: 'right' | 'left' = 'right';
	@Input() overheading: string | null = null;
	@Input() heading: string | null = null;
	@Input() subheading: string | null = null;
	@Input() description: string | null = null;
	@Input() buttonRoute: string | null = null;
  @Input() textColor: string = 'antiquewhite';
  @Input() imgUrl: string | null = null;
}
