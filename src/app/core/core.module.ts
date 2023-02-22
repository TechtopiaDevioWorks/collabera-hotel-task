import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserManagerService } from './services/user-manager.service';
import { InfoService } from './services/info.service';
import { OffersService } from './services/offers.service';
import { CarrerService } from './services/carrer.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [CommonModule, ReactiveFormsModule, RouterModule],
  providers: [UserManagerService, InfoService, OffersService, CarrerService]
})
export class CoreModule { }
