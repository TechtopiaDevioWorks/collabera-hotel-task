import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsPageComponent } from './hotels-page.component';

const routes: Routes = [{path: '', component: HotelsPageComponent},
{path: ':region', loadChildren: () => import('@pages/region-page/region-page.module').then((m) => m.RegionPageModule)}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsPageRoutingModule { }
