import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserManagerService } from '@core/services/user-manager.service';
import { Subscription } from 'rxjs';
import { HeaderButton } from '@core/interfaces/navigation';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
	isUserLoggedIn = false;
	loginStatusSubscription: Subscription | null = null;
	constructor(private User: UserManagerService) {}

	pageArray: HeaderButton[] = [
		{
			title: 'Hotels',
			icon: 'fa-solid fa-hotel',
			url: '/hotels',
			items: [
				{
					url: '/hotels/middle-east',
					title: 'Middle East',
					items: [
						{ url: '/hotels/middle-east/desert-oasis-resort', title: 'Desert Oasis Resort & Spa' },
						{ url: '/hotels/middle-east/alhambra-palace', title: 'Alhambra Palace Hotel' },
						{ url: '/hotels/middle-east/golden-sands', title: 'Golden Sands Beach Resort' },
					],
				},
				{
					url: '/hotels/europe',
					title: 'Europe',
					items: [
						{ url: '/hotels/europe/grand-continental', title: 'The Grand Continental' },
						{ url: '/hotels/europe/castle-inn', title: 'The Castle Inn' },
					],
				},
				{
					url: '/hotels/exotic',
					title: 'Exotic',

					items: [
						{ url: '/hotels/exotic/tropicana', title: 'Tropicana Island Resort' },
						{ url: '/hotels/exotic/zen-garden', title: 'Zen Garden Resort & Spa ' },
					],
				},
			],
		},
		{
			title: 'Dining',
			icon: 'fa-solid fa-utensils',
			url: '/dining',
			items: [
				{ url: '/dining/sushi', title: 'Sushi bar' },
				{ url: '/dining/traditional', title: 'Traditional' },
				{ url: '/dining/fine', title: 'Fine dining' },
			],
		},
		{ title: 'Offers', icon: 'fa-solid fa-star', url: '/offers' },
		{ title: 'About', icon: 'fa-solid fa-address-card', url: '/about' },
		{ title: 'Contact', icon: 'fa-solid fa-envelope', url: '/contact' },
		{ title: 'Carrers', icon: 'fa-solid fa-briefcase', url: '/carrers' },
		{ title: 'Reserve now', icon: 'fa-solid fa-bookmark', url: '/reserve' },
	];
	mobileNavigationState = false;
	ngOnInit(): void {
		this.loginStatusSubscription = this.User.loggedIn.subscribe((value) => {
			this.isUserLoggedIn = value;
		});
	}

	ngOnDestroy(): void {
		if (this.loginStatusSubscription) {
			this.loginStatusSubscription.unsubscribe();
		}
	}
}
