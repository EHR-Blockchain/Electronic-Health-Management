import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
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
  body:any = {
    "$class": "org.med.chain.AllowDoctorWrite",
    "patient": "pat1",
    "doctorId": "doc1",
    "timestamp": "2018-11-01T05:11:23.883Z"
  }
  constructor(public http: HttpClient,private barcodeScanner: BarcodeScanner,public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }
  
  async scanBarcode()
  {
   
      const results = await this.barcodeScanner.scan()
      console.log(results)
      alert(results.format)
      this.docId=results.text;
      this.body.doctorId=this.docId;
      this.postAllowDoctorWrite()
      
  }

  postAllowDoctorWrite(){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    this.http.post('http://192.168.0.9:3000/api/AllowDoctorWrite',this.body,{headers:headers}).map(res=>
     res
    ).subscribe(res=>{
      console.log(res);
    })
    alert("hurray!")
  }
}
