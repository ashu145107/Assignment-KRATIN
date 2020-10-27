import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import {ScanComponent} from './scan/scan.component';
import {ViewScanHistoryComponent} from './view-scan-history/view-scan-history.component';
import { PrintComponent } from './scan/print/print.component'

import {AuthGaurd} from "../auth/auth.gaurd";

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    canActivate: [AuthGaurd],
    children: [
      {
        path: 'scan',
        component: ScanComponent,
        children : [
          {
            path:'print-page',
            canActivate: [AuthGaurd],
            component: PrintComponent
          }
        ]
      },
      {
        path: 'view-scan-history',
        canActivate: [AuthGaurd],
        component: ViewScanHistoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
