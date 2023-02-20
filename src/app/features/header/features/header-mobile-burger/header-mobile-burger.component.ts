import { Component, EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-header-mobile-burger',
  templateUrl: './header-mobile-burger.component.html',
  styleUrls: ['./header-mobile-burger.component.scss']
})
export class HeaderMobileBurgerComponent {
  @Input() mobileState = false;
  @Output() mobileStateChange: EventEmitter<boolean> = new EventEmitter();


  toggleMobileNavigation() {
    this.mobileState = !this.mobileState;
    this.mobileStateChange.emit(this.mobileState);
  }
}
