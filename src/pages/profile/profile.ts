import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataServiceProvider} from '../../providers/data-service/data-service'
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { PatientmedicalrecordPage } from '../patientmedicalrecord/patientmedicalrecord';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Headers } from '@angular/http';
import * as moment from 'moment';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  options:BarcodeScannerOptions;
  docId:any;
  date: any;
  body:any = {
    
      "$class": "org.med.chain.AllowDoctorWrite",
      "patient": "string",
      "doctorId": "string",
      "timestamp": "2018-11-02T13:06:34.842Z"
    
  }
  profile: any;
  src='';
  constructor(private barcodeScanner: BarcodeScanner,public http: HttpClient,private dataService:DataServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.dataService.getPatientProfile().subscribe((res)=>{
      console.log(res)
      this.profile=res
    })
    this.body.timestamp = moment();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  openMedicalRecords()
  {
    this.navCtrl.setRoot(PatientmedicalrecordPage)
  }
  async scanBarcode()
  {
   
      const results = await this.barcodeScanner.scan()
      console.log(results)
      //alert(results.format)
      this.body.patient = this.dataService.patientId;
      this.docId=results.text;
      this.body.doctorId=this.docId;
      this.body.timestamp = moment();
      this.postAllowDoctorWrite()
      
  }
  
  postAllowDoctorWrite(){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    this.http.post('http://172.16.8.95:3000/api/AllowDoctorWrite',this.body,{headers:headers}).map(res=>
     //alert(res)
     res
    ).subscribe(res=>{
      console.log(res);
    })
    //alert("You have given access to a new doctor")
  }
}
