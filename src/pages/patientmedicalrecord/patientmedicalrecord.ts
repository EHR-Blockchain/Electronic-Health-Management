import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import { HttpClient} from '@angular/common/http';
import * as moment from 'moment';
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
       
      })
  }
  
  getMedicalRecordByPatId()
  {
     this.dataService.getMedicalRecordByPatId().subscribe(res=>{
     console.log(res)
     this.records=res
      
     })
      

  }
}
