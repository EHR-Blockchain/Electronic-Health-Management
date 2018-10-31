import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataServiceProvider} from '../../providers/data-service/data-service'

/**
 * Generated class for the PatientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patients',
  templateUrl: 'patients.html'
})
export class PatientsPage {
  patientsList:any = []
  constructor(private dataService:DataServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientsPage');
  }
  
  getPatients()
  {
    this.patientsList=this.dataService.getPatients().subscribe((res)=>{
      console.log(res)
    })
    
  }
}
