import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  getBookedDates(stay:string, room: string): Date[] {
    return []
  }

  getPrice(stay: string, room: string, startDate: Date, endDate: Date): number {
    return 0
  }
}
