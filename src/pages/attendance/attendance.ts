import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {
  options: BarcodeScannerOptions;
  scannedData: any={};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public scanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }

  scan(){
    this.options= {
      prompt: 'Scan your module QR Code'
    };
    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data;
    }, (err) => {
      console.log('Error: ', err);
    })
  }

  goback(){
  	this.navCtrl.popToRoot();
  }

}
