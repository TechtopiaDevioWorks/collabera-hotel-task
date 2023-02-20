import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { HeaderButton } from '@core/interfaces/navigation';
@Component({
	selector: 'app-header-page-button',
	templateUrl: './header-page-button.component.html',
	styleUrls: ['./header-page-button.component.scss'],
})
export class HeaderPageButtonComponent {
	@Input() headerButton?: HeaderButton;
	@Input() primaryButton: boolean = false;
	dropdownActive = false;
}
