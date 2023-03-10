import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiningPageComponent } from './dining-page.component';

const routes: Routes = [{ path: '', component: DiningPageComponent },
{path: ':diningoption', loadChildren: () => import('@pages/dining-info-page/dining-info-page.module').then((m) => m.DiningInfoPageModule)}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DiningPageRoutingModule {}
