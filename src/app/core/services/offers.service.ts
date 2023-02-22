import { Injectable } from '@angular/core';
import { Offer } from '@core/interfaces/offer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  offerList: Offer[] = 
    [
      {
        "title": "Desert Oasis Resort & Spa - Deluxe Room",
        "location": "Dubai, United Arab Emirates",
        "description": "Relax in a spacious deluxe room with a king-sized bed, private balcony overlooking the desert, and modern amenities. Includes breakfast and access to the resort's pools and spa.",
        "dates": "May 1 - May 7, 2023",
        oldprice: "$1500",
        price: '$700',
        "buttons": [
          {
            "text": "Book Now",
            "url": "/book/desert-oasis-deluxe-room"
          },
          {
            "text": "Learn More",
            "url": "/hotels/middle-east/desert-oasis-resort"
          }
        ]
      },
      {
        "title": "Alhambra Palace Hotel - Executive Suite",
        "location": "Al Ain, United Arab Emirates",
        "description": "Experience the opulence of the Alhambra Palace Hotel in a spacious executive suite with a separate living area, king-sized bed, and stunning views of the city. Includes breakfast and access to the hotel's rooftop pool.",
        "dates": "June 15 - June 20, 2023",
        oldprice: "$2000",
        price: '$750',
        "buttons": [
          {
            "text": "Book Now",
            "url": "https://www.example.com/book/alhambra-palace-executive-suite"
          },
          {
            "text": "Learn More",
            "url": "/hotels/middle-east/alhambra-palace"
          }
        ]
      },
      {
        "title": "Golden Sands Beach Resort - Beachfront Villa",
        "location": "Antalia, Turkey",
        "description": "Relax in a luxurious beachfront villa at the Golden Sands Beach Resort, complete with a private pool, king-sized bed, and stunning ocean views. Includes breakfast and access to the resort's fitness center and water sports activities.",
        "dates": "July 10 - July 15, 2023",
        oldprice: "$1400",
        price: '$850',
        "buttons": [
          {
            "text": "Book Now",
            "url": "https://www.example.com/book/golden-sands-beachfront-villa"
          },
          {
            "text": "Learn More",
            "url": "/hotels/middle-east/golden-sands"
          }
        ]
      },
      {
        "title": "The Grand Continental - Junior Suite",
        "location": "Paris, France",
        "description": "Experience the elegance of The Grand Continental in a spacious junior suite with a king-sized bed, separate living area, and views of the city. Includes breakfast and access to the hotel's rooftop terrace.",
        "dates": "August 20 - August 25, 2023",
        oldprice: "$1750",
        price: '$1100',
        "buttons": [
          {
            "text": "Book Now",
            "url": "https://www.example.com/book/grand-continental-junior-suite"
          },
          {
            "text": "Learn More",
            "url": "/hotels/europe/grand-continental"
          }
        ]
      },
      {
        "title": "The Castle Inn - Deluxe Room",
        "location": "Edinburgh, Scotland",
        "description": "Stay in a historic castle at The Castle Inn, with a deluxe room featuring a king-sized bed, antique furnishings, and views of the surrounding countryside. Includes breakfast and access to the castle's gardens and walking trails.",
        "dates": "September 5 - September 10, 2023",
        oldprice: "$3800",
        price: '$1500',
        "buttons": [
        {
        "text": "Book Now",
        "url": "https://www.example.com/book/castle-inn-deluxe-room"
        },
        {
        "text": "Learn More",
        "url": "/hotels/europe/castle-inn"
        }
        ]
        },
        {
        "title": "Tropicana Island Resort - Overwater Bungalow",
        "location": "Maldives",
        "description": "Experience the ultimate in luxury and relaxation with a stay in an overwater bungalow at Tropicana Island Resort. Features a king-sized bed, private deck with direct access to the ocean, and stunning views of the surrounding lagoon. Includes breakfast and access to the resort's water sports activities.",
        "dates": "October 12 - October 17, 2023",
        oldprice: "$1200",
        price: '$500',
        "buttons": [
        {
        "text": "Book Now",
        "url": "https://www.example.com/book/tropicana-island-overwater-bungalow"
        },
        {
        "text": "Learn More",
        "url": "/hotels/exotic/tropicana"
        }
        ]
        },
        {
        "title": "Zen Garden Resort & Spa - Garden Suite",
        "location": "Ubud, Bali",
        "description": "Experience the tranquility of Zen Garden Resort & Spa in a garden suite with a king-sized bed, private outdoor shower, and views of the lush tropical gardens. Includes breakfast and access to the resort's yoga and meditation classes.",
        "dates": "November 8 - November 13, 2023",
        oldprice: "$1800",
        price: '$650',
        "buttons": [
        {
        "text": "Book Now",
        "url": "https://www.example.com/book/zen-garden-garden-suite"
        },
        {
        "text": "Learn More",
        "url": "/hotels/exotic/zen-garden"
        }
        ]
        },
        {
        "title": "Desert Oasis Resort & Spa - Royal Suite",
        "location": "Dubai, United Arab Emirates",
        "description": "Experience the ultimate in luxury with a stay in the Royal Suite at Desert Oasis Resort & Spa. Features a king-sized bed, private balcony with stunning desert views, separate living area, and access to the resort's VIP lounge. Includes breakfast and a private desert safari excursion.",
        "dates": "December 20 - December 25, 2023",
        oldprice: "$1000",
        price: '$600',
        "buttons": [
        {
        "text": "Book Now",
        "url": "https://www.example.com/book/desert-oasis-royal-suite"
        },
        {
        "text": "Learn More",
        "url": "/hotels/middle-east/desert-oasis-resort"
        }
        ]
        },
        {
        "title": "Alhambra Palace Hotel - Deluxe Room",
        "location": "Al Ain, United Arab Emirates",
        "description": "Stay in a spacious deluxe room at the Alhambra Palace Hotel, featuring a king-sized bed, traditional Moorish decor, and views of the city or mountains. Includes breakfast and access to the hotel's rooftop terrace and spa.",
        "dates": "January 15 - January 20, 2024",
        oldprice: "$800",
        price: '$500',
        "buttons": [
        {
        "text": "Book Now",
        "url": "https://www.example.com/book/alhambra-palace-deluxe-room"
        },
        {
        "text": "Learn More",
        "url": "/hotels/middle-east/alhambra-palace"
      }
      ]
      }]
    
  
  constructor() { }

  getAllOffers(): Offer[] {
    return this.offerList;
  }
}
