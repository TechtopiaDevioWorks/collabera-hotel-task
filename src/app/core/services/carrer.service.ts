import { Injectable } from '@angular/core';
import { Carrer } from '@core/interfaces/carrer';

@Injectable({
  providedIn: 'root'
})
export class CarrerService {
  carrerList: Carrer[] = [
    {
      "title": "Executive Chef",
      "location": "Desert Oasis Resort & Spa",
      "description": "We're looking for an experienced Executive Chef to oversee the culinary operations of our luxury hotel in Dubai. The ideal candidate will have a passion for creating exceptional dishes and managing a team of talented chefs.",
      "buttons": [
        {
          "text": "Apply Now",
          "url": "https://www.example.com/careers/executive-chef"
        }
      ]
    },
    {
      "title": "Director of Sales",
      "location": "Zen Garden Resort & Spa",
      "description": "We're seeking a highly motivated Director of Sales to lead our sales team and drive revenue at our luxury resort in Bali. The ideal candidate will have experience in hotel sales, revenue management, and team leadership.",
      "buttons": [
        {
          "text": "Apply Now",
          "url": "https://www.example.com/careers/director-of-sales"
        }
      ]
    },
    {
      "title": "Housekeeping Manager",
      "location": "Tropicana Island Resort",
      "description": "We're seeking an experienced Housekeeping Manager to oversee the housekeeping operations at our luxury resort in the Maldives. The ideal candidate will have experience in housekeeping management, inventory control, and team leadership.",
      "buttons": [
        {
          "text": "Apply Now",
          "url": "https://www.example.com/careers/housekeeping-manager"
        }
      ]
    },
    {
      "title": "Front Desk Supervisor",
      "location": "Alhambra Palace Hotel",
      "description": "We're seeking a highly motivated Front Desk Supervisor to manage our front desk operations at our luxury hotel in Al Ain. The ideal candidate will have experience in front desk management, customer service, and team leadership.",
      "buttons": [
        {
          "text": "Apply Now",
          "url": "https://www.example.com/careers/front-desk-supervisor"
        }
      ]
    },
    {
      "title": "Event Coordinator",
      "location": "Zen Garden Resort & Spa",
      "description": "We're seeking a talented Event Coordinator to plan and execute events at our luxury resort in Bali. The ideal candidate will have experience in event planning, vendor management, and customer service.",
      "buttons": [
        {
          "text": "Apply Now",
          "url": "https://www.example.com/careers/event-coordinator"
        }
      ]
    },
    {
      "title": "Sous Chef",
      "location": "Alhambra Palace Hotel",
      "description": "We're seeking an experienced Sous Chef to assist our Executive Chef in overseeing the culinary operations of our luxury hotel in Al Ain. The ideal candidate will have experience in preparing and cooking high-quality dishes.",
      "buttons": [
        {
          "text": "Apply Now",
          "url": "https://www.example.com/careers/sous-chef"
        }
      ]
    },
    {
      "title": "Assistant Spa Manager",
      "location": "Tropicana Island Resort",
      "description": "We're seeking an Assistant Spa Manager to support the Spa Manager in overseeing the operations of our luxury spa at our resort in the Maldives. The ideal candidate will have experience in spa management, customer service, and team leadership.",
      "buttons": [
        {
          "text": "Apply Now",
          "url": "https://www.example.com/careers/assistant-spa-manager"
        }
      ]
    },
  ]  
  constructor() { }
  getAllCarrers(): Carrer[] {
    return this.carrerList;
  }
}
