import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss'],
})
export class MedicinesComponent implements OnInit {

  constructor(public routes: Router) { }

  ngOnInit() {}

  backPage(){
    this.routes.navigateByUrl('/dashboard');
  }

}
