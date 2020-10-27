import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss'],
})
export class PrintComponent implements OnInit {

  scanResult: any;
  private createdCode: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.scanResult = this.route.snapshot.paramMap.get('scanResult');
    console.log(this.scanResult);
  }

  printScanner(){
    this.createdCode = this.scanResult;
  }

  addShipment() {
    this.router.navigate(['/dashboard/scan']);
  }
}
