import { Injectable } from '@angular/core';
import { Offer } from '@core/interfaces/offer';

@Injectable({
	providedIn: 'root',
})
export class OffersService {
	offerList: Offer[] = [
		{
			offerId: '02b0eaa7e23d18479a9517b5c07d39f7',
			title: 'Desert Oasis Resort & Spa - Deluxe Room',
      hotel: "desert-oasis-resort",
      room: "deluxe-room",
			location: 'Dubai, United Arab Emirates',
			description:
				"Relax in a spacious deluxe room with a king-sized bed, private balcony overlooking the desert, and modern amenities. Includes breakfast and access to the resort's pools and spa.",
			dates: 'May 1 - May 7, 2023',
			oldprice: '1500',
			price: '700',
			buttons: [
				{
					text: 'Book Now',
					url: '/reserve',
          urlParams: {offer: '02b0eaa7e23d18479a9517b5c07d39f7'}
				},
				{
					text: 'Learn More',
					url: '/hotels/middle-east/desert-oasis-resort',
				},
			],
		},
		{
			offerId: '3da3a0c3e8d8c0129d4b3e4ee4bb200d',
			title: 'Alhambra Palace Hotel - Presidential Suite',
      hotel: "alhambra-palace",
      room: "presidential-suite",
			location: 'Al Ain, United Arab Emirates',
			description:
				"Experience the opulence of the Alhambra Palace Hotel in a spacious presidential suite with a separate living area, king-sized bed, and stunning views of the city. Includes breakfast and access to the hotel's rooftop pool.",
			dates: 'June 15 - June 20, 2023',
			oldprice: '2000',
			price: '750',
			buttons: [
				{
					text: 'Book Now',
					url: '/reserve',
          urlParams: {offer: '3da3a0c3e8d8c0129d4b3e4ee4bb200d'}
				},
				{
					text: 'Learn More',
					url: '/hotels/middle-east/alhambra-palace',
				},
			],
		},
		{
			offerId: '84d60f6efb251c90f0076d9b9f675945',
			title: 'Golden Sands Beach Resort - Royal Villa',
      hotel: "golden-sands",
      room: "royal-villa",
			location: 'Oman',
			description:
				"Relax in a luxurious royal villa at the Golden Sands Beach Resort, complete with a private pool, king-sized bed, and stunning ocean views. Includes breakfast and access to the resort's fitness center and water sports activities.",
			dates: 'July 10 - July 15, 2023',
			oldprice: '1400',
			price: '850',
			buttons: [
				{
					text: 'Book Now',
					url: '/reserve',
          urlParams: {offer: '84d60f6efb251c90f0076d9b9f675945'}
				},
				{
					text: 'Learn More',
					url: '/hotels/middle-east/golden-sands',
				},
			],
		},
		{
			offerId: '6d1ab6f8872a651f43a30c7bc634e731',
			title: 'The Grand Continental - Executive Suite',
      hotel: "grand-continental",
      room: "executive-suite",
			location: 'Paris, France',
			description:
				"Experience the elegance of The Grand Continental in a spacious executive suite with a king-sized bed, separate living area, and views of the city. Includes breakfast and access to the hotel's rooftop terrace.",
			dates: 'August 20 - August 25, 2023',
			oldprice: '1750',
			price: '1100',
			buttons: [
				{
					text: 'Book Now',
					url: '/reserve',
          urlParams: {offer: '6d1ab6f8872a651f43a30c7bc634e731'}
				},
				{
					text: 'Learn More',
					url: '/hotels/europe/grand-continental',
				},
			],
		},
		{
			offerId: '9c16b143bf1de69ce1d8dd2e426a305e',
			title: 'The Castle Inn - Deluxe Room',
      hotel: "castle-inn",
      room: "knight-room",
			location: 'Edinburgh, Scotland',
			description:
				"Stay in a historic castle at The Castle Inn, with a deluxe room featuring a king-sized bed, antique furnishings, and views of the surrounding countryside. Includes breakfast and access to the castle's gardens and walking trails.",
			dates: 'September 5 - September 10, 2023',
			oldprice: '3800',
			price: '1500',
			buttons: [
				{
					text: 'Book Now',
					url: '/reserve',
          urlParams: {offer: '9c16b143bf1de69ce1d8dd2e426a305e'}
				},
				{
					text: 'Learn More',
					url: '/hotels/europe/castle-inn',
				},
			],
		},
		{
			offerId: '3576d4b6ad026d9f4e3e7424f8372008',
			title: 'Tropicana Island Resort - Overwater Villa',
      hotel: "tropicana",
      room: "overwater-villa",
			location: 'Maldives',
			description:
				"Experience the ultimate in luxury and relaxation with a stay in an overwater bungalow at Tropicana Island Resort. Features a king-sized bed, private deck with direct access to the ocean, and stunning views of the surrounding lagoon. Includes breakfast and access to the resort's water sports activities.",
			dates: 'October 12 - October 17, 2023',
			oldprice: '1200',
			price: '500',
			buttons: [
				{
					text: 'Book Now',
					url: '/reserve',
          urlParams: {offer: '3576d4b6ad026d9f4e3e7424f8372008'}
				},
				{
					text: 'Learn More',
					url: '/hotels/exotic/tropicana',
				},
			],
		},
		{
			offerId: '94bae3476c4520ab28b8d9a9aa96463d',
			title: 'Zen Garden Resort & Spa - Garden Villa',
      hotel: "zen-garden",
      room: "garden-villa",
			location: 'Ubud, Bali',
			description:
				"Experience the tranquility of Zen Garden Resort & Spa in a garden villa with a king-sized bed, private outdoor shower, and views of the lush tropical gardens. Includes breakfast and access to the resort's yoga and meditation classes.",
			dates: 'November 8 - November 13, 2023',
			oldprice: '1800',
			price: '650',
			buttons: [
				{
					text: 'Book Now',
					url: '/reserve',
          urlParams: {offer: '94bae3476c4520ab28b8d9a9aa96463d'}
				},
				{
					text: 'Learn More',
					url: '/hotels/exotic/zen-garden',
				},
			],
		},
		{
			offerId: 'a152d4088d24452d7583b3e461a3ddbc',
			title: 'Desert Oasis Resort & Spa - Royal Suite',
      hotel: "desert-oasis-resort",
      room: "royal-suite",
			location: 'Dubai, United Arab Emirates',
			description:
				"Experience the ultimate in luxury with a stay in the Royal Suite at Desert Oasis Resort & Spa. Features a king-sized bed, private balcony with stunning desert views, separate living area, and access to the resort's VIP lounge. Includes breakfast and a private desert safari excursion.",
			dates: 'December 20 - December 25, 2023',
			oldprice: '1000',
			price: '600',
			buttons: [
				{
					text: 'Book Now',
					url: '/reserve',
          urlParams: {offer: 'a152d4088d24452d7583b3e461a3ddbc'}
				},
				{
					text: 'Learn More',
					url: '/hotels/middle-east/desert-oasis-resort',
				},
			],
		},
		{
			offerId: 'e2eb72f5b5c5e5fc6908cfc12c5ba17e',
			title: 'Alhambra Palace Hotel - Deluxe Room',
      hotel: "alhambra-palace",
      room: "deluxe-room",
			location: 'Al Ain, United Arab Emirates',
			description:
				"Stay in a spacious deluxe room at the Alhambra Palace Hotel, featuring a king-sized bed, traditional Moorish decor, and views of the city or mountains. Includes breakfast and access to the hotel's rooftop terrace and spa.",
			dates: 'January 15 - January 20, 2024',
			oldprice: '800',
			price: '500',
			buttons: [
				{
					text: 'Book Now',
					url: '/reserve',
          urlParams: {offer: 'e2eb72f5b5c5e5fc6908cfc12c5ba17e'}
				},
				{
					text: 'Learn More',
					url: '/hotels/middle-east/alhambra-palace',
				},
			],
		},
	];

	constructor() {}

	getAllOffers(): Offer[] {
		return this.offerList;
	}

  getOfferbyID(offerId: string): Offer | null {
    const offerData = this.offerList.find(e => e.offerId === offerId)
    if(offerData) {
      return offerData;
    } else {
      return null;
    }
  }
}
