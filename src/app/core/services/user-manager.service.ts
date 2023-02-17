import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UserManagerService {
	loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
	constructor() {}

	login() {
		this.loggedIn.next(true);
	}

	logout() {
		this.loggedIn.next(false);
	}

}
