import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StayPageComponent } from './stay-page.component';

const routes: Routes = [{path: '', component: StayPageComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StayPageRoutingModule { }
