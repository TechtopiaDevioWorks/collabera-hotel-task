import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-region-page',
	templateUrl: './region-page.component.html',
	styleUrls: ['./region-page.component.scss'],
})
export class RegionPageComponent implements OnInit, OnDestroy {
	constructor(private route: ActivatedRoute, private router: Router) {}
	currentRegion: string | null = null;
	routeParamSubscription: Subscription | null = null;

	data = [
		{
			region: 'Middle East',
			route: 'middle-east',
			hotels: [
				{
					title: 'Desert Oasis Resort & Spa',
					route: 'desert-oasis-resort',
					overheading: 'Middle East',
					imgUrl: 'https://i.ibb.co/pQRdGJ8/pexels-denys-gromov-14741193.jpg',
					description:
						'This luxurious hotel is designed to provide guests with a true oasis experience in the midst of the desert, complete with lush gardens, swimming pools, and a world-class spa.',
				},
				{
					title: 'Alhambra Palace Hotel',
					route: 'alhambra-palace',
					overheading: 'Middle East',
					imgUrl: 'https://i.ibb.co/JjQnW45/pexels-tima-miroshnichenko-7168582.jpg',
					description:
						'Inspired by the iconic Alhambra palace in Granada, Spain, this hotel combines Moorish architecture with modern luxury amenities. The result is a breathtakingly beautiful and unique destination for discerning travelers.',
				},
				{
					title: 'Golden Sands Beach Resort',
					route: 'golden-sands',
					overheading: 'Middle East',
					imgUrl: 'https://i.ibb.co/9253h8d/pexels-rachel-claire-4825701.jpg',
					description:
						'Situated on a pristine stretch of coastline, this resort offers guests a range of water sports, beachside dining, and luxurious accommodations. With golden sands and crystal-clear waters, it is the perfect place to relax and unwind.',
				},
			],
		},
		{
			region: 'Europe',
			route: 'europe',
			hotels: [
				{
					title: 'The Grand Continental',
					route: 'grand-continental',
					overheading: 'Europe',
					imgUrl: 'https://i.ibb.co/zs1KmbV/pexels-mauro-savoca-6691568.jpg',
					description:
						'This elegant hotel is situated in the heart of a bustling European city, offering guests a sophisticated experience with luxurious accommodations, fine dining, and impeccable service.',
				},
				{
					title: 'The Castle Inn',
					route: 'castle-inn',
					overheading: 'Europe',
					imgUrl: 'https://i.ibb.co/sbY0VzG/pexels-mark-amores-7478450.jpg',
					description:
						'Located in a historic castle that has been beautifully restored and transformed into a luxurious hotel, The Castle Inn is the perfect destination for travelers looking to experience the charm and grandeur of medieval Europe.',
				},
			],
		},
		{
			region: 'Exotic',
			route: 'exotic',
			hotels: [
				{
					title: 'Tropicana Island Resort',
					route: 'tropicana',
					overheading: 'Exotic',
					imgUrl: 'https://i.ibb.co/wKdWcQt/pexels-ben-mack-6775268.jpg',
					description:
						'Nestled on a pristine tropical island, Tropicana offers guests a secluded and exotic getaway. With overwater bungalows, palm-fringed beaches, and crystal-clear waters perfect for snorkeling and diving, this resort is the ultimate destination for those seeking a tropical paradise.',
				},
				{
					title: 'Zen Garden Resort & Spa ',
					route: 'zen-garden',
					overheading: 'Exotic',
					imgUrl: 'https://i.ibb.co/GF0vvJP/pexels-asad-photo-maldives-3601425.jpg',
					description:
						'This serene and peaceful resort is set in the lush jungles of Bali, surrounded by beautiful gardens and tranquil water features. With a focus on wellness and relaxation, Zen Garden offers guests a range of spa treatments, yoga classes, and meditation sessions, as well as healthy cuisine and luxurious accommodations.',
				},
			],
		},
	];
	currentHotelList: any[] = [];

	ngOnInit(): void {
		this.routeParamSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
			this.currentRegion = params.get('region');
			const currentRegionData = this.data.find((el) => el.route === this.currentRegion);
			if (currentRegionData) {
				this.currentHotelList = currentRegionData.hotels;
			} else {
				this.router.navigate(['/not-found']);
			}
		});
	}

	ngOnDestroy(): void {
		if (this.routeParamSubscription) {
			this.routeParamSubscription.unsubscribe();
		}
	}
}
