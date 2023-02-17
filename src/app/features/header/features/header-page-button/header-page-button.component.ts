import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'app-header-page-button',
	templateUrl: './header-page-button.component.html',
	styleUrls: ['./header-page-button.component.scss'],
})
export class HeaderPageButtonComponent {
	@Input() pageTitle = '';
	@Input() pageIcon = '';
  @Input() pageUrl = '';

}
