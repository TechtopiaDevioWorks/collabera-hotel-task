import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiningInfoPageComponent } from './dining-info-page.component';

const routes: Routes = [{path: '', component: DiningInfoPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiningInfoPageRoutingModule { }
