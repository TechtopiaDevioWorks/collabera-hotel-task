import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WellnessPageComponent } from './wellness-page.component';

const routes: Routes = [{ path: '', component: WellnessPageComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class WellnessPageRoutingModule {}
