import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataServiceProvider} from '../../providers/data-service/data-service';

import * as moment from 'moment';
import { HttpClient,HttpHeaders} from '@angular/common/http';
/**
 * Generated class for the PatientmedicalrecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patientmedicalrecord',
  templateUrl: 'patientmedicalrecord.html',
})
export class PatientmedicalrecordPage {
  records: any = []
  recordId:any;
  ans:any = []
  claims:any = []
  claimsLength:any;
  newClaimIdNo:any;
  claimBody:any = {
    "$class": "org.med.chain.InsuranceClaim",
  "claimID": "string",
  "medicalRecord": "string",
  "insuranceProvider": "EHR_insp_$1",
  "status": "submitted"
  }
 
  
//   var str = '2011-04-11T10:20:30Z';
// var date = moment(str);
// var dateComponent = date.utc().format('YYYY-MM-DD');
// var timeComponent = date.utc().format('HH:mm:ss');
// console.log(dateComponent);
// console.log(timeComponent);
  constructor(public http:HttpClient,public dataService:DataServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientmedicalrecordPage');
    this.dataService.getMedicalRecordByPatId().subscribe(res=>{
      console.log(res)
      this.records=res
      console.log(this.records.length)
       
      })
  }
  claimInsurance(record)
  {
    console.log(record.recordId)
    this.recordId=record.recordId;
   this.dataService.claimInsurance().subscribe(res=>{
     console.log(res)
     this.claims=res
     console.log(this.claims.length)
     this.claimsLength=this.claims.length;
     this.postClaimInsurance()
   })




  }
  postClaimInsurance()
  {
    this.claimBody.medicalRecord=this.recordId;
    this.newClaimIdNo=this.claimsLength+1;
    this.claimBody.claimID=("EHR_claim_$"+this.newClaimIdNo);
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    this.http.post('http://172.16.1.15:3000/api/InsuranceClaim',this.claimBody,{headers:headers}).map(res=>
     //alert(res)
     res
    ).subscribe(res=>{
      console.log(res);
    })
  }
  
  // // getMedicalRecordByPatId()
  // // {
  // //    this.dataService.getMedicalRecordByPatId().subscribe(res=>{
  // //   // console.log(res)
  // //   //  this.records=res
  // //   //  console.log(this.records);
  // //   //   console.log(this.ans.length);
  // //    })
      

  // }
}
