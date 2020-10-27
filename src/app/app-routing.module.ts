import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import { DoctersComponent } from './dashboard/docters/docters.component';
import {MedicinesComponent} from './dashboard/medicines/medicines.component';
import {HospitalsComponent} from './dashboard/hospitals/hospitals.component';
import {BloodCheckupComponent} from './dashboard/blood-checkup/blood-checkup.component';
import {ContactComponent} from './dashboard/contact/contact.component';
import {DietPlansAndYogaComponent} from './dashboard/diet-plans-and-yoga/diet-plans-and-yoga.component'
import {AuthGaurd} from './auth/auth.gaurd';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGaurd]
  },
  {
    path: 'docters-page',
    canActivate: [AuthGaurd],
    component: DoctersComponent
  },
  {
    path: 'medicines-page',
    canActivate: [AuthGaurd],
    component: MedicinesComponent
  },
  {
    path: 'hospitals-page',
    canActivate: [AuthGaurd],
    component: HospitalsComponent
  },
  {
    path: 'contact-page',
    canActivate: [AuthGaurd],
    component: ContactComponent
  },
  {
    path: 'blood-checkup',
    canActivate: [AuthGaurd],
    component: BloodCheckupComponent
  },
  {
    path: 'diet-plans-and-yoga-page',
    canActivate: [AuthGaurd],
    component: DietPlansAndYogaComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [AuthGaurd]
})
export class AppRoutingModule {}
