import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReserveNowPageComponent } from './reserve-now-page.component';

const routes: Routes = [{ path: '', component: ReserveNowPageComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ReserveNowPageRoutingModule {}
