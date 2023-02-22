import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reserve-now-page',
  templateUrl: './reserve-now-page.component.html',
  styleUrls: ['./reserve-now-page.component.scss']
})
export class ReserveNowPageComponent implements OnInit, OnDestroy {
  reserveForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    hotel: new FormControl(null, [Validators.required]),
    room: new FormControl(null, [Validators.required]),
    startDate: new FormControl(null, [Validators.required]),
    endDate: new FormControl(null, [Validators.required]),
    payment: new FormControl('online', [Validators.required]),
  });
  minDate: Date;
  querySubscription: Subscription | null =null;

  constructor(private route: ActivatedRoute) {
    this.minDate = new Date();
    this.minDate.setHours(0, 0, 0, 0);
    this.minDate.setDate(this.minDate.getDate()+1)
  }

  ngOnInit(): void {
    this.querySubscription = this.route.queryParams.subscribe(params => {
      if(Object.hasOwn(params, 'subject')) {
        /*const subjectForm = this.contactForm.get('subject');
        if(subjectForm) {
          subjectForm.setValue(params['subject'])
          subjectForm.markAsTouched();
          subjectForm.disable();
        }*/
      }
    })  
  }

  ngOnDestroy(): void {
    if(this.querySubscription) {
      this.querySubscription.unsubscribe()
    }
  }

  onSubmit() {
    console.log(this.reserveForm.value)
    if(this.reserveForm.value.payment==='online') {
      window.open('https://www.paypal.com',  "_blank", "resizable=no, toolbar=no, scrollbars=no, menubar=no, status=no, directories=no, location=no, width=1000, height=600");
    }
  }
}
