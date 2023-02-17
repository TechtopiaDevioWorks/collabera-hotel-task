import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserManagerService } from '@core/services/user-manager.service';
import { Subscription } from 'rxjs';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
	isUserLoggedIn = false;
  loginStatusSubscription: Subscription | null = null;
	constructor(private User: UserManagerService) {}

  pageArray: {pageTitle: string, pageIcon: string, pageUrl: string}[] = [
    {pageTitle: 'Home', pageIcon: 'fas fa-plus fa-2x', pageUrl: '/home'},
    {pageTitle: 'Hotels', pageIcon: 'fas fa-plus fa-2x', pageUrl: '/hotels'},
    {pageTitle: 'Dining', pageIcon: 'fas fa-plus fa-2x', pageUrl: '/dining'},
    {pageTitle: 'Wellness', pageIcon: 'fas fa-plus fa-2x', pageUrl: '/wellness'},
    {pageTitle: 'Offers', pageIcon: 'fas fa-plus fa-2x', pageUrl: '/offers'},
    {pageTitle: 'About', pageIcon: 'fas fa-plus fa-2x', pageUrl: '/about'},
    {pageTitle: 'Contact', pageIcon: 'fas fa-plus fa-2x', pageUrl: '/contact'},
    {pageTitle: 'Carrers', pageIcon: 'fas fa-plus fa-2x', pageUrl: '/carrers'},
    {pageTitle: 'Reserve now', pageIcon: 'fas fa-plus fa-2x', pageUrl: '/reserve'},
    {pageTitle: 'Booking info', pageIcon: 'fas fa-plus fa-2x', pageUrl: '/booking'},
  ]
	ngOnInit(): void {
    this.loginStatusSubscription = this.User.loggedIn.subscribe((value) => {
      this.isUserLoggedIn = value;
    })
  }

  ngOnDestroy(): void {
    if (this.loginStatusSubscription) {
      this.loginStatusSubscription.unsubscribe()
    }
  }

}
