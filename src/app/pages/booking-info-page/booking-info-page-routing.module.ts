import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingInfoPageComponent } from './booking-info-page.component';

const routes: Routes = [{ path: '', component: BookingInfoPageComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BookingInfoPageRoutingModule {}
