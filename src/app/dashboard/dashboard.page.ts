import { Component, OnInit } from '@angular/core';
import {MenuController, Platform} from "@ionic/angular";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {StatusBar} from "@ionic-native/status-bar/ngx";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  isAuthenticated = false;

  constructor(
      private menu: MenuController,
      private authService: AuthService) { }

  ngOnInit() {
    this.authService.authChange.subscribe(status => {
      this.isAuthenticated = status;
    });
  }
  onLogout() {
    this.menu.close();
    this.authService.logout();
  }
  openMenu() {
    this.menu.open();
  }
}
