import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController} from 'ionic-angular';
import {NgForm} from '@angular/forms';
import { PatientmedicalrecordPage } from '../patientmedicalrecord/patientmedicalrecord';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import { HttpClient} from '@angular/common/http';
import { HomePage } from '../home/home';
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  response:any;
  allow =false;
  constructor(public http:HttpClient,public dataService:DataServiceProvider,private alertCtrl: AlertController, private loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  
  onSignIn(form:NgForm){
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });

    // loading.present();
    
    console.log(form.value);
    this.dataService.signIn(form.value.patientId,form.value.password).subscribe(res=>{
      
      this.response=res
      // console.log(this.response)
      if(this.response)
      {
        this.allow=true
         this.navCtrl.setRoot(HomePage)
         const alert = this.alertCtrl.create({
           title: 'Signin Successfull!',
           message: 'Welcome back to the EHR system',
           buttons: ['Ok']
         });
         alert.present();
        
      }
    })
    

  }
}
