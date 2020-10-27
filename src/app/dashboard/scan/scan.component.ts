import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import * as uuid from 'uuid';
import {LoadingController, ToastController} from '@ionic/angular';
import jsQR from 'jsqr';
import * as moment from 'moment';
import * as data from '../mydata';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss'],
})
export class ScanComponent implements OnInit, AfterViewInit {
  scanActive = false;
  scanResult = null;
  @ViewChild('video', {static: false}) video: ElementRef;
  @ViewChild('canvas', {static: false}) canvas: ElementRef;
  videoElement: any;
  canvasElement: any;
  canvasContext: any;
  PrintedScan: any;
  qrData = null;
  createdCode = null;
  loading: HTMLIonLoadingElement;

  constructor(private loadingController: LoadingController, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  }

  async startScanner() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {facingMode: 'environment'}
    });
    this.videoElement.srcObject = stream;
    this.videoElement.setAttribute('playsinline', true);
    this.videoElement.play();
    this.loading = await this.loadingController.create({});
    await this.loading.present();
    requestAnimationFrame(this.scan.bind(this));
  }

  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }
      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
          this.videoElement,
          0,
          0,
          this.canvasElement.width,
          this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
          0,
          0,
          this.canvasElement.width,
          this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
      if (code && code.binaryData && code.binaryData.length > 0) {
        this.scanActive = false;
        this.scanResult = code.data;
        // Actual Result
        console.log(this.scanResult);
        const arrayOfObject = [];
        const id = uuid.v4();
        const date = moment().format('YYYY-MM-DD HH:mm:ss');
        console.log(arrayOfObject);
        data.scanHistories.push({id, value: this.scanResult, date});
        this.router.navigate(['print', this.scanResult]);
        this.showToast('QR Scanned Successful');
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  printScanner(){
    this.createdCode = this.scanResult;
  }

  stopScanner() {
    this.scanActive = false;
  }

  reset() {
    this.scanResult = null;
  }

}
