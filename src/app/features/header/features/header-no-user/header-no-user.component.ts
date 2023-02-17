import { Component } from '@angular/core';
import { UserManagerService } from '@core/services/user-manager.service';

@Component({
	selector: 'app-header-no-user',
	templateUrl: './header-no-user.component.html',
	styleUrls: ['./header-no-user.component.scss'],
})
export class HeaderNoUserComponent {
	constructor(private User: UserManagerService) {}

  onLoginClick() {
    this.User.login();
  }
}
