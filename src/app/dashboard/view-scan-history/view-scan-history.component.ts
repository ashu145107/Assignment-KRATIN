import { Component, DoCheck,  OnInit } from '@angular/core';
import * as data from '../mydata';

@Component({
  selector: 'app-view-scan-history',
  templateUrl: './view-scan-history.component.html',
  styleUrls: ['./view-scan-history.component.scss'],
})
export class ViewScanHistoryComponent implements OnInit, DoCheck {
  isenabled = false;
  scanHistory = data.scanHistories;
  scanResult: any;
  private createdCode: any;
  viewScan = false;
  constructor() { }

  ngOnInit() {

  }

  ngDoCheck(){
    if(this.scanHistory && this.scanHistory.length > 0){
      this.isenabled=true; 
    }else{
      this.isenabled=false;
      }
  }

  printScanner(){
    this.viewScan = true;
      this.createdCode = this.scanHistory;
  }
}
