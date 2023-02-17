import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { HeaderPageButtonComponent } from './features/header-page-button/header-page-button.component';
import { HeaderLogoComponent } from './features/header-logo/header-logo.component';
import { HeaderNoUserComponent } from './features/header-no-user/header-no-user.component';
import { HeaderUserComponent } from './features/header-user/header-user.component';
import { HeaderUserPanelComponent } from './features/header-user-panel/header-user-panel.component';
import { HeaderMobileBurgerComponent } from './features/header-mobile-burger/header-mobile-burger.component';
import { CoreModule } from '@core/core.module';
import { HeaderPageDropdownComponent } from './features/header-page-dropdown/header-page-dropdown.component';

@NgModule({
  declarations: [HeaderComponent, HeaderPageButtonComponent, HeaderLogoComponent, HeaderNoUserComponent, HeaderUserComponent, HeaderUserPanelComponent, HeaderMobileBurgerComponent, HeaderPageDropdownComponent],
  imports: [
    CommonModule, CoreModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
