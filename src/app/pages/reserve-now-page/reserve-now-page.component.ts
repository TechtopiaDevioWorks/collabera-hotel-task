import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DropdownValue } from '@core/interfaces/navigation';
import { BookingService } from '@core/services/booking.service';
import { InfoService } from '@core/services/info.service';
import { OffersService } from '@core/services/offers.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-reserve-now-page',
	templateUrl: './reserve-now-page.component.html',
	styleUrls: ['./reserve-now-page.component.scss'],
})
export class ReserveNowPageComponent implements OnInit, OnDestroy {
	reserveForm = new FormGroup({
		firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
		lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
		email: new FormControl('', [Validators.required, Validators.email]),
		hotel: new FormControl('', [Validators.required]),
		room: new FormControl('', [Validators.required]),
    dateRange: new FormGroup({
      startDate: new FormControl(null, [Validators.required]),
		  endDate: new FormControl(null, [Validators.required]),
    }),
		payment: new FormControl('online', [Validators.required]),
	});
	minDate: Date;
	querySubscription: Subscription | null = null;
	hotelList: DropdownValue[] = [];
	roomList: DropdownValue[] = [];
	hotelSubscription: Subscription | null | undefined = null;
	roomSubscrtiption: Subscription | null | undefined = null;
	bookedDates: Date[] = [];
	constructor(private route: ActivatedRoute, private _info: InfoService, private _booking: BookingService, private _offer: OffersService) {
		this.minDate = new Date();
		this.minDate.setHours(0, 0, 0, 0);
		this.minDate.setDate(this.minDate.getDate() + 1);
	}

	ngOnInit(): void {
		this.querySubscription = this.route.queryParams.subscribe((params) => {
			if (Object.hasOwn(params, 'offer')) {
        this.initOffer(params['offer'])
			}
		});
		this.setupForm()
	}

	ngOnDestroy(): void {
		if (this.querySubscription) {
			this.querySubscription.unsubscribe();
		}
		if (this.hotelSubscription) {
			this.hotelSubscription.unsubscribe();
		}
		if (this.roomSubscrtiption) {
			this.roomSubscrtiption.unsubscribe();
		}
	}

  initOffer(offer: string) {
    const offerInfo = this._offer.getOfferbyID(offer);
    if(offerInfo) {
      this.reserveForm.get('hotel')?.setValue(offerInfo.hotel);
      this.reserveForm.get('hotel')?.disable();
      this.roomList = this._info.getStayRoomList(offerInfo.hotel).map((e) => ({ title: e.roomName, value: e.room }));
      this.reserveForm.get('room')?.setValue(offerInfo.room)
      this.reserveForm.get('room')?.disable();
    }
  }

  setupForm() {
    this.hotelList = this._info.getStayList();
    this.reserveForm.get('room')?.disable();
		this.reserveForm.get('startDate')?.disable();
		this.reserveForm.get('endDate')?.disable();
		this.hotelSubscription = this.reserveForm.get('hotel')?.valueChanges.subscribe((event) => {
			if (event) {
				this.reserveForm.get('room')?.reset();
				this.roomList = this._info.getStayRoomList(event).map((e) => ({ title: e.roomName, value: e.room }));
				this.reserveForm.get('room')?.enable();
			}
		});
		this.roomSubscrtiption = this.reserveForm.get('room')?.valueChanges.subscribe((event) => {
			if (event) {
				this.updateDateAvailable();
			}
		});
  }

	updateDateAvailable() {
		const hotel = this.reserveForm.get('hotel')?.value;
		const room = this.reserveForm.get('room')?.value;
		if (!hotel || !room) {
			return;
		}
		this.reserveForm.get('startDate')?.enable();
		this.reserveForm.get('endDate')?.enable();
		this.reserveForm.get('startDate')?.reset();
		this.reserveForm.get('endDate')?.reset();
		this.bookedDates = this._booking.getBookedDates(hotel, room);
	}

	dateFilter = (d: Date | null): boolean =>{
		const date = d || new Date();
		return !this.bookedDates.find((e) => e.getTime() === date.getTime());
	}

	onSubmit() {
		console.log(this.reserveForm.value);
		if (this.reserveForm.value.payment === 'online') {
			window.open(
				'https://www.paypal.com',
				'_blank',
				'resizable=no, toolbar=no, scrollbars=no, menubar=no, status=no, directories=no, location=no, width=1000, height=600'
			);
		}
	}
}
