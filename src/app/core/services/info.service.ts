import { Injectable } from '@angular/core';
import { DiningData, MinDiningData } from '@core/interfaces/dining';
import { RoomData, StayData } from '@core/interfaces/hotel';
import { DropdownValue } from '@core/interfaces/navigation';

@Injectable({
	providedIn: 'root',
})
export class InfoService {
	private stayData: StayData[] = [
		{
			region: 'europe',
			regionName: 'Europe',
			hotel: 'grand-continental',
			hotelName: 'The Grand Continental',
			info: [
				{
					description: `The Grand Continental is a luxurious five-star hotel located in the heart of Europe, offering guests a unique and opulent experience. Located in the historic city of Vienna, Austria, the hotel boasts a prime location just minutes away from some of the city's most famous landmarks and cultural attractions. With elegant and sophisticated décor, the Grand Continental creates a sense of timeless elegance that transports guests to a bygone era. Each of the hotel's 251 rooms and suites are beautifully appointed with luxurious furnishings, plush bedding, and state-of-the-art technology, ensuring a comfortable and memorable stay.`,
					textLocation: 'right',
					imgUrl:
						'https://images.pexels.com/photos/189042/pexels-photo-189042.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The Grand Continental offers an array of world-class amenities and services, including a fitness center, spa, indoor pool, and a range of dining options. The hotel's fine dining restaurant, Le Ciel by Toni Mörwald, offers a gastronomic journey through the flavors of Austria and beyond, while the hotel's café, Melange, serves traditional Viennese pastries and coffee in a charming and relaxed setting. The hotel also features a bar and lounge, perfect for unwinding after a long day of sightseeing or business meetings.          `,
					textLocation: 'left',
					imgUrl:
						'https://images.pexels.com/photos/15010963/pexels-photo-15010963.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The Grand Continental is the perfect destination for travelers seeking luxury and refinement. The hotel's commitment to excellence and attention to detail is evident in every aspect of the guest experience, from the luxurious accommodations to the exceptional dining and leisure facilities. Whether visiting Vienna for business or pleasure, the Grand Continental is an unforgettable destination that embodies the spirit of European hospitality and elegance.`,
					textLocation: 'right',
					imgUrl:
						'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
			],
			rooms: [
				{
					room: 'classic-room',
					roomName: 'Classic Room',
					description:
						'Our Classic Rooms are elegantly designed with a comfortable king-size bed and a beautiful view of the city. With plush furnishings and luxurious amenities, you will feel right at home.',
					imgUrlList: [
						'https://example.com/images/classic-room-1.jpg',
						'https://example.com/images/classic-room-2.jpg',
						'https://example.com/images/classic-room-3.jpg',
					],
				},
				{
					room: 'deluxe-room',
					roomName: 'Deluxe Room',
					description:
						'Our Deluxe Rooms are spacious and feature a king-size bed with plush linens, a seating area, and a beautiful view of the city. Relax and unwind in luxury.',
					imgUrlList: [
						'https://example.com/images/deluxe-room-1.jpg',
						'https://example.com/images/deluxe-room-2.jpg',
						'https://example.com/images/deluxe-room-3.jpg',
					],
				},
				{
					room: 'executive-suite',
					roomName: 'Executive Suite',
					description:
						'Our Executive Suites are perfect for business or leisure travelers looking for a little extra space. Enjoy a separate living area with comfortable seating and stunning views of the city.',
					imgUrlList: [
						'https://example.com/images/executive-suite-1.jpg',
						'https://example.com/images/executive-suite-2.jpg',
						'https://example.com/images/executive-suite-3.jpg',
					],
				},
				{
					room: 'presidential-suite',
					roomName: 'Presidential Suite',
					description:
						'Our Presidential Suite is the ultimate in luxury and comfort. With a separate living and dining area, a spacious bedroom with a king-size bed, and stunning views of the city, you will feel like royalty.',
					imgUrlList: [
						'https://example.com/images/presidential-suite-1.jpg',
						'https://example.com/images/presidential-suite-2.jpg',
						'https://example.com/images/presidential-suite-3.jpg',
					],
				},
				{
					room: 'penthouse-suite',
					roomName: 'Penthouse Suite',
					description:
						'Our Penthouse Suite is the epitome of luxury. Located on the top floor, it offers stunning panoramic views of the city. With a spacious living area, dining area, and bedroom with a king-size bed, you will feel on top of the world.',
					imgUrlList: [
						'https://example.com/images/penthouse-suite-1.jpg',
						'https://example.com/images/penthouse-suite-2.jpg',
						'https://example.com/images/penthouse-suite-3.jpg',
					],
				},
			],
		},
		{
			region: 'europe',
			regionName: 'Europe',
			hotel: 'castle-inn',
			hotelName: 'The Castle Inn',
			info: [
				{
					description: `The Castle Inn is a medieval hotel located in the heart of Europe, offering guests a unique and historic experience. Located in the idyllic countryside of England, the hotel boasts a prime location in a beautifully preserved castle dating back to the 12th century. With its ancient architecture and period furnishings, the Castle Inn transports guests to a bygone era, providing an authentic glimpse into the medieval lifestyle. Each of the hotel's 35 rooms and suites is beautifully appointed with antique furnishings, four-poster beds, and stunning views of the surrounding countryside.`,
					textLocation: 'right',
					imgUrl:
						'https://images.pexels.com/photos/12131657/pexels-photo-12131657.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The Castle Inn offers an array of medieval-themed activities and services, including jousting tournaments, archery lessons, and medieval banquets. The hotel's restaurant, the Knight's Table, serves traditional medieval fare such as roast meats, stews, and hearty soups, accompanied by a selection of fine wines and mead. The hotel also features a cozy bar, perfect for sipping ale or mead while relaxing by a roaring fire.`,
					textLocation: 'left',
					imgUrl:
						'https://images.pexels.com/photos/1831408/pexels-photo-1831408.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The Castle Inn is the perfect destination for travelers seeking a truly unique and historic experience. The hotel's commitment to preserving the castle's rich history and culture is evident in every aspect of the guest experience, from the period furnishings to the medieval-themed activities and services. Whether visiting for a romantic getaway or a family vacation, the Castle Inn provides an unforgettable glimpse into the fascinating world of medieval life.`,
					textLocation: 'right',
					imgUrl:
						'https://images.pexels.com/photos/7828842/pexels-photo-7828842.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
			],
			rooms: [
				{
					room: 'knight-room',
					roomName: 'Knight Room',
					description:
						'Our Knight Room will transport you back in time to the age of chivalry. The room features a four-poster bed, medieval furnishings, and a beautiful view of the castle courtyard.',
					imgUrlList: [
						'https://example.com/images/knight-room-1.jpg',
						'https://example.com/images/knight-room-2.jpg',
						'https://example.com/images/knight-room-3.jpg',
					],
				},
				{
					room: 'monk-room',
					roomName: 'Monk Room',
					description:
						'Our Monk Room offers a peaceful and tranquil atmosphere, with monastic furnishings and a comfortable double bed. Relax and unwind in this historic setting.',
					imgUrlList: [
						'https://example.com/images/monk-room-1.jpg',
						'https://example.com/images/monk-room-2.jpg',
						'https://example.com/images/monk-room-3.jpg',
					],
				},
				{
					room: 'royal-suite',
					roomName: 'Royal Suite',
					description:
						'Our Royal Suite is fit for a king or queen. With a spacious bedroom featuring a four-poster bed, a separate sitting room with comfortable seating, and stunning views of the castle and surrounding countryside, you will feel like royalty.',
					imgUrlList: [
						'https://example.com/images/royal-suite-1.jpg',
						'https://example.com/images/royal-suite-2.jpg',
						'https://example.com/images/royal-suite-3.jpg',
					],
				},
				{
					room: 'dungeon-room',
					roomName: 'Dungeon Room',
					description:
						"Our Dungeon Room offers a truly unique and unforgettable experience. Located in the castle's actual dungeon, the room features medieval furnishings and a cozy double bed. Don't worry, the door is unlocked from the inside!",
					imgUrlList: [
						'https://example.com/images/dungeon-room-1.jpg',
						'https://example.com/images/dungeon-room-2.jpg',
						'https://example.com/images/dungeon-room-3.jpg',
					],
				},
				{
					room: 'tapestry-room',
					roomName: 'Tapestry Room',
					description:
						'Our Tapestry Room features beautiful woven tapestries depicting scenes from medieval life, along with comfortable furnishings and a cozy double bed. Relax and immerse yourself in the rich history of the castle.',
					imgUrlList: [
						'https://example.com/images/tapestry-room-1.jpg',
						'https://example.com/images/tapestry-room-2.jpg',
						'https://example.com/images/tapestry-room-3.jpg',
					],
				},
			],
		},
		{
			region: 'exotic',
			regionName: 'Exotic',
			hotel: 'tropicana',
			hotelName: 'Tropicana Island Resort',
			info: [
				{
					description: `Tropicana Island Resort is a breathtakingly exotic resort located on the pristine Tropicana Island in the Indian Ocean. The island is renowned for its crystal-clear waters, white sandy beaches, and vibrant marine life, making it the perfect destination for those seeking a tropical paradise. The resort offers guests a luxurious and secluded retreat, with 45 elegant and spacious villas nestled amongst lush tropical gardens and overlooking the turquoise ocean.`,
					textLocation: 'right',
					imgUrl:
						'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The Tropicana Island Resort offers an array of world-class amenities and services, including a stunning infinity pool, a private beach, and a range of water sports such as snorkeling, diving, and paddleboarding. The resort's spa provides a tranquil oasis for guests to relax and unwind, offering a variety of rejuvenating treatments and therapies. The resort's restaurants and bars serve a tantalizing array of cuisine, including fresh seafood, exotic cocktails, and international dishes, making it a foodie's paradise.`,
					textLocation: 'left',
					imgUrl:
						'https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `Tropicana Island Resort is the perfect destination for those seeking an exotic and luxurious escape. The resort's stunning natural surroundings, world-class amenities, and exceptional service make it an unforgettable destination for romantic getaways, family vacations, or solo travel. Whether seeking adventure or relaxation, Tropicana Island Resort offers something for everyone, making it the ultimate tropical getaway.`,
					textLocation: 'right',
					imgUrl:
						'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
			],
			rooms: [
				{
					room: 'beach-bungalow',
					roomName: 'Beach Bungalow',
					description:
						"Enjoy your own piece of paradise in our cozy beach bungalow. With stunning ocean views and direct beach access, you'll never want to leave.",
					imgUrlList: [
						'https://example.com/beach-bungalow-1.jpg',
						'https://example.com/beach-bungalow-2.jpg',
						'https://example.com/beach-bungalow-3.jpg',
					],
				},
				{
					room: 'overwater-villa',
					roomName: 'Overwater Villa',
					description:
						'Experience luxury living on the water in our overwater villa. Enjoy panoramic ocean views from your private deck, and swim in the crystal-clear waters right below your feet.',
					imgUrlList: [
						'https://example.com/overwater-villa-1.jpg',
						'https://example.com/overwater-villa-2.jpg',
						'https://example.com/overwater-villa-3.jpg',
					],
				},
				{
					room: 'jungle-suite',
					roomName: 'Jungle Suite',
					description:
						"Get lost in the lush tropical jungle in our spacious jungle suite. With a private balcony overlooking the rainforest and all the modern amenities, you'll have the perfect blend of adventure and relaxation.",
					imgUrlList: [
						'https://example.com/jungle-suite-1.jpg',
						'https://example.com/jungle-suite-2.jpg',
						'https://example.com/jungle-suite-3.jpg',
					],
				},
				{
					room: 'deluxe-beachfront-villa',
					roomName: 'Deluxe Beachfront Villa',
					description:
						"Indulge in the ultimate luxury experience in our deluxe beachfront villa. With breathtaking ocean views, a private pool, and direct beach access, you'll have everything you need to unwind and enjoy paradise.",
					imgUrlList: [
						'https://example.com/deluxe-beachfront-villa-1.jpg',
						'https://example.com/deluxe-beachfront-villa-2.jpg',
						'https://example.com/deluxe-beachfront-villa-3.jpg',
					],
				},
			],
		},
		{
			region: 'exotic',
			regionName: 'Exotic',
			hotel: 'zen-garden',
			hotelName: 'Zen Garden Resort & Spa',
			info: [
				{
					description: `Zen Garden Resort & Spa is an exotic resort located in the heart of Bali, Indonesia, offering guests a tranquil and luxurious escape from the stresses of everyday life. Nestled amongst lush tropical gardens, the resort's architecture and decor embody the principles of Zen philosophy, creating a serene and peaceful atmosphere. The resort features 25 beautifully appointed villas, each with a private pool, outdoor shower, and luxurious amenities.`,
					textLocation: 'right',
					imgUrl:
						'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The Zen Garden Resort & Spa offers an array of world-class amenities and services, including a stunning infinity pool, a yoga and meditation studio, and a range of spa treatments designed to rejuvenate the mind, body, and soul. The resort's restaurant, Zen Garden Restaurant, serves an array of Indonesian and international dishes, using locally sourced ingredients and incorporating traditional Balinese flavors. The resort also offers cooking classes, where guests can learn to prepare traditional Balinese dishes.`,
					textLocation: 'left',
					imgUrl:
						'https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The Zen Garden Resort & Spa is the perfect destination for those seeking a luxurious and tranquil escape. The resort's commitment to sustainability and eco-friendliness is evident in every aspect of the guest experience, from the use of natural materials to the resort's organic vegetable garden. Whether seeking relaxation or adventure, the Zen Garden Resort & Spa offers something for everyone, making it the ultimate destination for a tropical getaway.`,
					textLocation: 'right',
					imgUrl:
						'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
			],
			rooms: [
				{
					room: 'garden-villa',
					roomName: 'Garden Villa',
					description:
						"Nestled in our lush tropical gardens, our garden villa is the perfect place to unwind and reconnect with nature. With a private outdoor shower and all the modern amenities, you'll have everything you need for a luxurious and tranquil escape.",
					imgUrlList: [
						'https://example.com/garden-villa-1.jpg',
						'https://example.com/garden-villa-2.jpg',
						'https://example.com/garden-villa-3.jpg',
					],
				},
				{
					room: 'ocean-view-suite',
					roomName: 'Ocean View Suite',
					description:
						"Enjoy breathtaking views of the Indian Ocean from our spacious ocean view suite. With a private balcony and all the modern amenities, you'll have the perfect blend of relaxation and luxury.",
					imgUrlList: [
						'https://example.com/ocean-view-suite-1.jpg',
						'https://example.com/ocean-view-suite-2.jpg',
						'https://example.com/ocean-view-suite-3.jpg',
					],
				},
				{
					room: 'pool-villa',
					roomName: 'Pool Villa',
					description:
						"Experience the ultimate luxury in our pool villa, complete with a private pool and outdoor gazebo. With a spacious living area and all the modern amenities, you'll have everything you need for an unforgettable escape.",
					imgUrlList: [
						'https://example.com/pool-villa-1.jpg',
						'https://example.com/pool-villa-2.jpg',
						'https://example.com/pool-villa-3.jpg',
					],
				},
				{
					room: 'beachfront-suite',
					roomName: 'Beachfront Suite',
					description:
						"Wake up to stunning ocean views from our beachfront suite. With direct beach access and all the modern amenities, you'll have the perfect balance of luxury and tranquility.",
					imgUrlList: [
						'https://example.com/beachfront-suite-1.jpg',
						'https://example.com/beachfront-suite-2.jpg',
						'https://example.com/beachfront-suite-3.jpg',
					],
				},
			],
		},
		{
			region: 'middle-east',
			regionName: 'Middle East',
			hotel: 'desert-oasis-resort',
			hotelName: 'Desert Oasis Resort & Spa',
			info: [
				{
					description: `Desert Oasis Resort & Spa is a luxurious hotel located in the heart of the Middle East, offering guests an unforgettable desert oasis experience. The hotel is nestled amongst the rolling sand dunes of the Arabian Desert, providing guests with a serene and tranquil escape from the hustle and bustle of city life. The hotel's architecture and decor are inspired by traditional Arabian design, creating a unique and authentic atmosphere. Each of the hotel's 100 rooms and suites is elegantly appointed with luxurious amenities and breathtaking views of the surrounding desert.`,
					textLocation: 'right',
					imgUrl:
						'https://images.pexels.com/photos/14741183/pexels-photo-14741183.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The Desert Oasis Resort & Spa offers an array of world-class amenities and services, including a stunning infinity pool, a full-service spa, and a range of outdoor activities such as camel riding, dune bashing, and desert camping. The hotel's restaurant, Oasis Dining, serves an array of international dishes, using locally sourced ingredients and incorporating traditional Middle Eastern flavors. The hotel also features a shisha lounge, where guests can enjoy a variety of flavored shisha while relaxing in a traditional Arabian setting.`,
					textLocation: 'left',
					imgUrl:
						'https://images.pexels.com/photos/5563471/pexels-photo-5563471.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The Desert Oasis Resort & Spa is the perfect destination for travelers seeking a luxurious and authentic desert oasis experience. The hotel's commitment to preserving and promoting the culture and traditions of the Middle East is evident in every aspect of the guest experience, from the traditional architecture to the authentic dining options. Whether seeking relaxation or adventure, the Desert Oasis Resort & Spa offers something for everyone, making it the ultimate destination for a Middle Eastern getaway.`,
					textLocation: 'right',
					imgUrl:
						'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
			],
			rooms: [
				{
					room: 'deluxe-room',
					roomName: 'Deluxe Room',
					description:
						'Our Deluxe Rooms offer spacious and elegant accommodation, with a king-size bed and comfortable seating area. These rooms feature contemporary décor with traditional Middle Eastern touches, and offer stunning views of the surrounding desert landscape.',
					imgUrlList: ['https://example.com/images/deluxe-room-1.jpg', 'https://example.com/images/deluxe-room-2.jpg'],
				},
				{
					room: 'pool-suite',
					roomName: 'Pool Suite',
					description:
						'Our Pool Suites offer the ultimate in luxury and comfort, with a private terrace featuring a plunge pool and loungers. These spacious suites feature a separate living area and bedroom, with contemporary décor and traditional Middle Eastern touches. Guests can enjoy stunning views of the desert from the comfort of their own private pool.',
					imgUrlList: ['https://example.com/images/pool-suite-1.jpg', 'https://example.com/images/pool-suite-2.jpg'],
				},
				{
					room: 'royal-suite',
					roomName: 'Royal Suite',
					description:
						'Our Royal Suites offer the ultimate in opulence and luxury, with a spacious living area, separate bedroom and dressing room, and a private balcony offering stunning views of the desert. These suites feature contemporary décor with traditional Middle Eastern touches, and offer a truly unforgettable experience for our most discerning guests.',
					imgUrlList: ['https://example.com/images/royal-suite-1.jpg', 'https://example.com/images/royal-suite-2.jpg'],
				},
				{
					room: 'desert-tent',
					roomName: 'Desert Tent',
					description:
						'For a truly unique experience, our Desert Tents offer guests the opportunity to stay in a traditional Bedouin-style tent, complete with all modern amenities. These tents feature a comfortable king-size bed, seating area, and private bathroom, as well as a private terrace with stunning views of the desert.',
					imgUrlList: ['https://example.com/images/desert-tent-1.jpg', 'https://example.com/images/desert-tent-2.jpg'],
				},
				{
					room: 'garden-room',
					roomName: 'Garden Room',
					description:
						'Our Garden Rooms offer a tranquil and peaceful escape, with a private terrace overlooking our beautiful gardens. These rooms feature contemporary décor with traditional Middle Eastern touches, and offer a comfortable king-size bed, seating area, and luxurious bathroom.',
					imgUrlList: ['https://example.com/images/garden-room-1.jpg', 'https://example.com/images/garden-room-2.jpg'],
				},
				{
					room: 'oasis-suite',
					roomName: 'Oasis Suite',
					description:
						'Our Oasis Suites offer a truly luxurious and spacious accommodation, with a separate living area, bedroom, and private terrace featuring stunning views of the desert oasis. These suites feature contemporary décor with traditional Middle Eastern touches, and offer guests the ultimate in comfort and relaxation.',
					imgUrlList: ['https://example.com/images/oasis-suite-1.jpg', 'https://example.com/images/oasis-suite-2.jpg'],
				},
			],
		},
		{
			region: 'middle-east',
			regionName: 'Middle East',
			hotel: 'alhambra-palace',
			hotelName: 'Alhambra Palace Hotel',
			info: [
				{
					description: `Alhambra Palace Hotel is a luxurious hotel located in the heart of the Middle East, inspired by the iconic Alhambra Palace in Granada, Spain. The hotel's architecture and decor pay homage to the legendary palace, with intricate mosaics, stunning archways, and ornate furnishings. The hotel's 115 rooms and suites are elegantly appointed with luxurious amenities and breathtaking views of the surrounding city.`,
					textLocation: 'right',
					imgUrl:
						'https://images.pexels.com/photos/3680912/pexels-photo-3680912.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The Alhambra Palace Hotel offers an array of world-class amenities and services, including a rooftop pool with panoramic views of the city, a full-service spa, and a range of dining options inspired by the flavors of Spain and the Middle East. The hotel's restaurant, Alhambra Dining, serves an array of international dishes, using locally sourced ingredients and incorporating traditional Middle Eastern and Spanish flavors. The hotel also features a bar, Alhambra Bar, where guests can enjoy a variety of signature cocktails and tapas while taking in the stunning views of the city.`,
					textLocation: 'left',
					imgUrl:
						'https://images.pexels.com/photos/5395702/pexels-photo-5395702.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The Alhambra Palace Hotel is the perfect destination for travelers seeking a luxurious and unique experience inspired by the rich history and culture of Spain and the Middle East. The hotel's commitment to preserving and promoting the legacy of the Alhambra Palace is evident in every aspect of the guest experience, from the stunning architecture to the authentic dining options. Whether seeking relaxation or adventure, the Alhambra Palace Hotel offers something for everyone, making it the ultimate destination for a Middle Eastern and Spanish-inspired getaway.`,
					textLocation: 'right',
					imgUrl:
						'https://images.pexels.com/photos/3771827/pexels-photo-3771827.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
			],
			rooms: [
				{
					room: 'deluxe-room',
					roomName: 'Deluxe Room',
					description:
						'Experience the ultimate luxury in our Deluxe Room, featuring stunning decor inspired by the Alhambra Palace in Granada, Spain. With rich fabrics, ornate tiling, and a plush king-size bed, this room is perfect for guests seeking a truly indulgent stay.',
					imgUrlList: [
						'https://example.com/img/deluxe-room-1.jpg',
						'https://example.com/img/deluxe-room-2.jpg',
						'https://example.com/img/deluxe-room-3.jpg',
					],
				},
				{
					room: 'suite-room',
					roomName: 'Suite Room',
					description:
						'Relax in style in our Suite Room, featuring a spacious living area and a luxurious king-size bed. Adorned with intricate tilework, elegant drapery, and lavish furnishings, this room is the epitome of opulence and comfort.',
					imgUrlList: [
						'https://example.com/img/suite-room-1.jpg',
						'https://example.com/img/suite-room-2.jpg',
						'https://example.com/img/suite-room-3.jpg',
					],
				},
				{
					room: 'presidential-suite',
					roomName: 'Presidential Suite',
					description:
						'Indulge in the ultimate luxury experience in our Presidential Suite. With a stunning bedroom, separate living area, and a private balcony overlooking the city skyline, this room is fit for a king or queen. Inspired by the Alhambra Palace, the decor is rich and opulent, featuring intricate details and high-end finishes.',
					imgUrlList: [
						'https://example.com/img/presidential-suite-1.jpg',
						'https://example.com/img/presidential-suite-2.jpg',
						'https://example.com/img/presidential-suite-3.jpg',
					],
				},
				{
					room: 'pool-view-room',
					roomName: 'Pool View Room',
					description:
						"Experience the ultimate in relaxation in our Pool View Room, featuring breathtaking views of the hotel's stunning swimming pool. The room's decor is inspired by the Alhambra Palace and features rich fabrics, intricate tilework, and elegant furnishings.",
					imgUrlList: [
						'https://example.com/img/pool-view-room-1.jpg',
						'https://example.com/img/pool-view-room-2.jpg',
						'https://example.com/img/pool-view-room-3.jpg',
					],
				},
				{
					room: 'garden-view-room',
					roomName: 'Garden View Room',
					description:
						"Wake up to the soothing sounds of nature in our Garden View Room. The room features stunning decor inspired by the Alhambra Palace and overlooks the hotel's beautiful gardens. With plush bedding, elegant furnishings, and luxurious amenities, this room is the perfect retreat.",
					imgUrlList: [
						'https://example.com/img/garden-view-room-1.jpg',
						'https://example.com/img/garden-view-room-2.jpg',
						'https://example.com/img/garden-view-room-3.jpg',
					],
				},
			],
		},
		{
			region: 'middle-east',
			regionName: 'Middle East',
			hotel: 'golden-sands',
			hotelName: 'Golden Sands Beach Resort',
			info: [
				{
					description: `Golden Sands Beach Resort is a luxurious Middle Eastern resort located on the shores of the Arabian Gulf. The resort offers guests a tranquil and luxurious escape from the hustle and bustle of city life. The resort is nestled amongst lush tropical gardens and features a private beach, providing guests with breathtaking views of the sparkling waters of the Arabian Gulf. The resort's architecture and decor are inspired by traditional Arabian design, creating a unique and authentic atmosphere.`,
					textLocation: 'right',
					imgUrl:
						'https://images.pexels.com/photos/9400988/pexels-photo-9400988.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The Golden Sands Beach Resort offers an array of world-class amenities and services, including a stunning infinity pool, a full-service spa, and a range of outdoor activities such as water sports, beach volleyball, and tennis. The resort's restaurant, Golden Sands Dining, serves an array of international dishes, using locally sourced ingredients and incorporating traditional Middle Eastern flavors. The resort also features a shisha lounge, where guests can enjoy a variety of flavored shisha while relaxing in a traditional Arabian setting.`,
					textLocation: 'left',
					imgUrl:
						'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The Golden Sands Beach Resort is the perfect destination for travelers seeking a luxurious and authentic Middle Eastern beach resort experience. The resort's commitment to preserving and promoting the culture and traditions of the Middle East is evident in every aspect of the guest experience, from the traditional architecture to the authentic dining options. Whether seeking relaxation or adventure, the Golden Sands Beach Resort offers something for everyone, making it the ultimate destination for a Middle Eastern beach getaway.`,
					textLocation: 'right',
					imgUrl:
						'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
			],
			rooms: [
				{
					room: 'deluxe-room',
					roomName: 'Deluxe Room',
					description:
						'Our Deluxe Rooms offer stunning views of the Arabian Gulf and feature luxurious amenities for a comfortable and memorable stay. Each room comes with a king-size bed, a spacious seating area, and a private balcony or terrace.',
					imgUrlList: [
						'https://example.com/deluxe-room-1.jpg',
						'https://example.com/deluxe-room-2.jpg',
						'https://example.com/deluxe-room-3.jpg',
					],
				},
				{
					room: 'executive-suite',
					roomName: 'Executive Suite',
					description:
						'Our Executive Suites offer a spacious and elegant living space, perfect for both business and leisure travelers. Each suite comes with a separate bedroom, a luxurious bathroom, a dining area, and a private balcony with stunning views of the Arabian Gulf.',
					imgUrlList: [
						'https://example.com/executive-suite-1.jpg',
						'https://example.com/executive-suite-2.jpg',
						'https://example.com/executive-suite-3.jpg',
					],
				},
				{
					room: 'royal-villa',
					roomName: 'Royal Villa',
					description:
						'Our Royal Villa offers the ultimate in luxury and privacy, with its own private beach, infinity pool, and 24-hour butler service. The villa features three bedrooms, a spacious living room, a fully equipped kitchen, and a private terrace with stunning views of the Arabian Gulf.',
					imgUrlList: [
						'https://example.com/royal-villa-1.jpg',
						'https://example.com/royal-villa-2.jpg',
						'https://example.com/royal-villa-3.jpg',
					],
				},
				{
					room: 'pool-suite',
					roomName: 'Pool Suite',
					description:
						'Our Pool Suites offer the perfect blend of indoor and outdoor living, with a private terrace and infinity pool overlooking the Arabian Gulf. Each suite features a spacious bedroom, a luxurious bathroom, and a living area with comfortable seating.',
					imgUrlList: [
						'https://example.com/pool-suite-1.jpg',
						'https://example.com/pool-suite-2.jpg',
						'https://example.com/pool-suite-3.jpg',
					],
				},
				{
					room: 'garden-suite',
					roomName: 'Garden Suite',
					description:
						'Our Garden Suites offer a peaceful and relaxing retreat, with a private terrace overlooking the lush gardens of our resort. Each suite features a spacious bedroom, a luxurious bathroom, and a living area with comfortable seating.',
					imgUrlList: [
						'https://example.com/garden-suite-1.jpg',
						'https://example.com/garden-suite-2.jpg',
						'https://example.com/garden-suite-3.jpg',
					],
				},
			],
		},
	];

	private diningData: DiningData[] = [
		{
			dining: 'sushi',
			imgUrl:
				'https://images.pexels.com/photos/10296389/pexels-photo-10296389.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
			available: [],
			diningName: 'Sushi bar',
			description: `The luxury sushi bar can be found in multiple locations, offering guests an authentic Japanese dining experience with a touch of elegance and luxury. The sushi bar features a selection of the finest and freshest sushi and sashimi, prepared by skilled and experienced chefs. The atmosphere is intimate and sophisticated, with stylish decor and a sleek bar where guests can watch the chefs at work. Whether seeking a romantic dinner for two or a night out with friends, The luxury sushi bar is the perfect destination for anyone seeking a memorable dining experience.`,
			info: [
				{
					description: `The success of the sushi bar has led to the opening of multiple locations across the globe. Each location offers the same exceptional dining experience, with an unwavering commitment to quality and authenticity. The menu is carefully curated to feature only the finest and freshest ingredients, with a focus on sustainably sourced seafood. Skilled chefs prepare each dish with precision and care, ensuring that the flavors are perfectly balanced and the textures are sublime. The atmosphere in each location is carefully crafted to be both intimate and sophisticated, with elegant decor and warm lighting that sets the mood for a truly memorable dining experience.`,
					imgUrl:
						'https://images.pexels.com/photos/10296420/pexels-photo-10296420.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `In addition to its exceptional food and atmosphere, the sushi bar is known for its impeccable service. Each location is staffed with knowledgeable and attentive servers who are passionate about providing guests with a truly exceptional dining experience. From recommending the perfect sake pairing to explaining the nuances of each dish, the staff at the sushi bar are committed to ensuring that every guest leaves feeling fully satisfied. Whether you are a seasoned sushi lover or a first-time visitor, the sushi bar is the perfect destination for anyone seeking an unforgettable Japanese dining experience.`,
					imgUrl:
						'https://images.pexels.com/photos/12755974/pexels-photo-12755974.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
			],
		},
		{
			dining: 'traditional',
			diningName: 'Traditional',
			imgUrl:
				'https://images.pexels.com/photos/5779170/pexels-photo-5779170.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
			available: [],
			description: `These traditional restaurants can be found in multiple locations, offering guests a culinary journey through various regions of the world. Each restaurant features a unique selection of traditional dishes from the specific location it serves, prepared with the freshest and finest ingredients and expertly crafted by skilled chefs. The atmosphere in each restaurant is warm and inviting, with traditional decor and attentive service. Whether seeking a taste of classic Italian cuisine or the flavors of arabian dishes, these traditional restaurants offer a dining experience that is both authentic and unforgettable. Each location is dedicated to preserving the rich culinary heritage of its respective region and providing guests with a memorable dining experience that captures the essence of that particular culture.`,
			info: [
				{
					description: `These traditional restaurants have become a go-to destination for travelers and locals alike. With multiple locations across the world, each restaurant offers a unique culinary experience, taking guests on a journey through different regions and cultures. The menus are carefully curated to showcase the best of each region, with dishes that are not only delicious but also tell a story about the local cuisine. From classic Italian dishes like pizza and pasta to aromatic Arabian dishes like hummus and shawarma, each restaurant offers a range of flavors that are sure to tantalize the taste buds.`,
					imgUrl:
						'https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The chefs at each location are highly skilled and experienced, with a passion for creating dishes that are not only delicious but also visually stunning. They use only the freshest and finest ingredients, sourced from local farms and markets, ensuring that each dish is of the highest quality. The atmosphere in each restaurant is warm and inviting, with traditional decor that captures the essence of the culture it represents. Guests can expect attentive service from staff who are passionate about sharing their love for food and culture.`,
					imgUrl:
						'https://images.pexels.com/photos/6275164/pexels-photo-6275164.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The traditional restaurants are also known for their commitment to sustainability and ethical practices. Each location takes measures to reduce food waste and minimize its carbon footprint, ensuring that the dining experience is not only delicious but also environmentally conscious. Whether you are looking for a romantic dinner for two or a family-friendly meal, these traditional restaurants are the perfect destination for anyone seeking a dining experience that is both authentic and unforgettable.`,
					imgUrl:
						'https://images.pexels.com/photos/12035802/pexels-photo-12035802.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
			],
		},
		{
			dining: 'fine',
			available: [],
			diningName: 'Fine dining',
			imgUrl:
				'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
			description: `These fine dining restaurants are located in various cities around the world, offering guests an unforgettable culinary experience. Each restaurant boasts a Michelin star and features a unique menu, expertly crafted by world-renowned chefs. The atmosphere in each restaurant is elegant and sophisticated, with stylish decor and attentive service. Whether seeking a romantic dinner for two or a celebratory meal with friends, these fine dining restaurants provide an unparalleled dining experience.`,
			info: [
				{
					description: `These fine dining restaurants are a destination for discerning diners who seek exceptional food and impeccable service. Each location offers a unique culinary journey, with menus that are carefully curated by world-renowned chefs. From innovative fusion dishes to classic French cuisine, these restaurants showcase the best of the culinary world. With Michelin stars to their names, guests can expect an unforgettable dining experience, with dishes that are not only delicious but also visually stunning.`,
					imgUrl:
						'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
				{
					description: `The atmosphere in each restaurant is sophisticated and refined, with elegant decor that creates a sense of luxury. The service is attentive and personalized, with staff who are passionate about providing guests with an exceptional dining experience. The menus are designed to take guests on a culinary journey, with each dish expertly crafted using the finest ingredients. From the selection of wines to the presentation of each dish, every detail is meticulously planned to ensure that guests leave with a memorable experience. Whether it is a special occasion or a romantic dinner for two, these fine dining restaurants offer an unparalleled dining experience that is sure to impress even the most discerning diners.`,
					imgUrl:
						'https://images.pexels.com/photos/6373940/pexels-photo-6373940.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1',
				},
			],
		},
	];

	constructor() {}

	getStayInfo(stay: string): StayData | undefined {
		const stayInfo = this.stayData.find((el) => el.hotel === stay);
		return stayInfo;
	}

	getDiningInfo(dining: string): DiningData | undefined {
		const diningInfo = this.diningData.find((el) => el.dining === dining);
		return diningInfo;
	}

	getAllDiningInfo(): MinDiningData[] {
		return this.diningData;
	}

	getStayList(): DropdownValue[] {
		return this.stayData.map(e => ({title: e.hotelName, value: e.hotel}))
	}

	getStayRoomList(stay: string): RoomData[] {
		const stayInfo = this.stayData.find(e => e.hotel === stay);
		if(!stayInfo || stayInfo.rooms === undefined|| stayInfo?.rooms?.length === 0) {
			return []
		} else {
			return stayInfo.rooms
		}
	}
}
