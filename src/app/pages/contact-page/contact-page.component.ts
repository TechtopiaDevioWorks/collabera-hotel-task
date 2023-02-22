import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {
  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    message: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]),
    aggrement: new FormControl(false, [Validators.requiredTrue]),
  });

  querySubscription: Subscription | null =null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.querySubscription = this.route.queryParams.subscribe(params => {
      if(Object.hasOwn(params, 'subject')) {
        const subjectForm = this.contactForm.get('subject');
        if(subjectForm) {
          subjectForm.setValue(params['subject'])
          subjectForm.markAsTouched();
          subjectForm.disable();
        }
      }
    })  
  }

  ngOnDestroy(): void {
    if(this.querySubscription) {
      this.querySubscription.unsubscribe()
    }
  }

  onSubmit() {
    console.log(this.contactForm.value)
  }
}
