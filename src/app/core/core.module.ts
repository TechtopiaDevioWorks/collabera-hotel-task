import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserManagerService } from './services/user-manager.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [CommonModule, ReactiveFormsModule, RouterModule],
  providers: [UserManagerService]
})
export class CoreModule { }
