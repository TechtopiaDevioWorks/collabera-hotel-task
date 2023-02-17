import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingInfoPageComponent } from './booking-info-page.component';

describe('BookingInfoPageComponent', () => {
  let component: BookingInfoPageComponent;
  let fixture: ComponentFixture<BookingInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
