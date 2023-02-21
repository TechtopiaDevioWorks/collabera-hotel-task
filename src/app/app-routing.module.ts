import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
	},
	{
		path: 'about',
		loadChildren: () => import('./pages/about-page/about-page.module').then((m) => m.AboutPageModule),
	},
  {
		path: 'booking',
		loadChildren: () => import('./pages/booking-info-page/booking-info-page.module').then((m) => m.BookingInfoPageModule),
	},
  {
		path: 'carrers',
		loadChildren: () => import('./pages/carrers-page/carrers-page.module').then((m) => m.CarrersPageModule),
	},
  {
		path: 'contact',
		loadChildren: () => import('./pages/contact-page/contact-page.module').then((m) => m.ContactPageModule),
	},
  {
		path: 'dining',
		loadChildren: () => import('./pages/dining-page/dining-page.module').then((m) => m.DiningPageModule),
	},
  {
		path: 'hotels',
		loadChildren: () => import('./pages/hotels-page/hotels-page.module').then((m) => m.HotelsPageModule),
	},
  {
		path: 'offers',
		loadChildren: () => import('./pages/offers-page/offers-page.module').then((m) => m.OffersPageModule),
	},
  {
		path: 'reserve',
		loadChildren: () => import('./pages/reserve-now-page/reserve-now-page.module').then((m) => m.ReserveNowPageModule),
	},
  {
		path: 'wellness',
		loadChildren: () => import('./pages/wellness-page/wellness-page.module').then((m) => m.WellnessPageModule),
	},
	{
		path: 'not-found',
		loadChildren: () => import('./pages/not-found-page/not-found-page.module').then((m) => m.NotFoundPageModule),
	},
	{
		path: '**',
		redirectTo: 'not-found',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
