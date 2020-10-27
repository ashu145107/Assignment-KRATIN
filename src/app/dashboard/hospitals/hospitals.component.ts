import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss'],
})
export class HospitalsComponent implements OnInit {

  constructor(public routes: Router) { }

  ngOnInit() {}
  backPage(){
    this.routes.navigateByUrl('/dashboard');
  }
}
