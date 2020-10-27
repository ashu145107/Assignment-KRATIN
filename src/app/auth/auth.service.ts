import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import { AuthData } from './auth-data.model';
import {User} from './user.model';
import {Subject} from 'rxjs';
// @ts-ignore
import credentials from './credentials.json';
import {ToastController} from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  authChange = new Subject<boolean>();

  constructor(private router: Router, private toastCtrl: ToastController) {
    console.log(credentials);
  }

  signup(authData) {
    // save sign up data
    this.authSuccessFully();
    this.user = {
      email: authData.email,
      username: authData.username
    };
    this.authSuccessFully();
  }
  login(authData: AuthData) {
    if (authData.email === credentials.email && authData.password === credentials.password){
      this.user = {
        email: authData.email,
        username: credentials.username
      };
      this.authSuccessFully();
    } else {
      this.showToast('Wrong credentials');
      this.router.navigate(['/login']);
    }
  }
  logout() {
    this.user = null;
    this.authChange.next(false);
    this.showToast('Successfully Logged out!');
    this.router.navigate(['login']);
  }
  getUser() {
    return { ...this.user };
  }
  isAuth() {
    return this.user != null;
  }
  authSuccessFully() {
    this.authChange.next(true);
    this.router.navigate(['/dashboard']);
  }
  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 5000
    });
    toast.present();
  }

}
