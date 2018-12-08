import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import * as moment from 'moment';
import {DataServiceProvider} from '../../providers/data-service/data-service';
/**
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {
  options:BarcodeScannerOptions;
  docId:any;
  date: any;
  body:any = {
    
      "$class": "org.med.chain.AllowDoctorWrite",
      "patient": "string",
      "doctorId": "string",
      
      "timestamp": "2018-11-02T13:06:34.842Z"
    
  }
  constructor(public dataService:DataServiceProvider,public http: HttpClient,private barcodeScanner: BarcodeScanner,public navCtrl: NavController, public navParams: NavParams) {
    this.body.timestamp = moment();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }
  
  async scanBarcode()
  {
   
      const results = await this.barcodeScanner.scan()
      console.log(results)
      alert(results.format)
      this.body.patient = this.dataService.patientId;
      this.docId=results.text;
      this.body.doctorId=this.docId;
      this.body.timestamp = moment();
      this.postAllowDoctorWrite()
      
  }

  postAllowDoctorWrite(){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    this.http.post('http://172.16.1.15:3000/api/AllowDoctorWrite',this.body,{headers:headers}).map(res=>
     alert(res)
    ).subscribe(res=>{
      console.log(res);
    })
    alert("You have given access to a new doctor")
  }
}
