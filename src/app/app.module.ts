import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouteReuseStrategy, RouterModule} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ViewScanHistoryComponent} from './dashboard/view-scan-history/view-scan-history.component';
import {ScanComponent} from './dashboard/scan/scan.component';

import { PrintComponent } from './dashboard/scan/print/print.component';
import {NgxQRCodeModule} from 'ngx-qrcode2';

@NgModule({
    declarations: [AppComponent, LoginComponent, SignupComponent, ForgotPasswordComponent,
        ViewScanHistoryComponent,
        ScanComponent,
        PrintComponent
    ],
    entryComponents: [],
    imports: [BrowserModule, RouterModule.forRoot([{path: 'print/:scanResult', component: PrintComponent}]),
        IonicModule.forRoot(), NgxQRCodeModule, AppRoutingModule, ReactiveFormsModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    exports: [
        ScanComponent,
        ViewScanHistoryComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
