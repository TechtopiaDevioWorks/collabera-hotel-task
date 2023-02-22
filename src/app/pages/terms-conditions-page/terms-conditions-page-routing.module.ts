import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsConditionsPageComponent } from './terms-conditions-page.component';

const routes: Routes = [
  {path: '', component: TermsConditionsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsConditionsPageRoutingModule { }
