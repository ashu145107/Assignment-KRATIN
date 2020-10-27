import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-docters',
  templateUrl: './docters.component.html',
  styleUrls: ['./docters.component.scss'],
})
export class DoctersComponent implements OnInit {

  constructor(public routes: Router) { }

  ngOnInit() {}
  backPage(){
    this.routes.navigateByUrl('/dashboard');
  }
}
