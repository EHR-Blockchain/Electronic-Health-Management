import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QrcodePage } from '../qrcode/qrcode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  qrPage(){
    this.navCtrl.push(QrcodePage);
  }
}
