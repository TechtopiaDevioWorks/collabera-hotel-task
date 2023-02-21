import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionPageComponent } from './region-page.component';

const routes: Routes = [{path: '', component: RegionPageComponent, pathMatch: 'full'},
{path: ':stay', loadChildren: () => import('@pages/stay-page/stay-page.module').then((m) => m.StayPageModule)}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionPageRoutingModule { }
