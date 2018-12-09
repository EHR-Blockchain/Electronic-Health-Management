import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import {NgForm} from '@angular/forms';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import { Observable } from 'rxjs/Observable';
import { SigninPage } from '../signin/signin';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  response:any;
  

  constructor(public http:HttpClient,public dataService:DataServiceProvider,public navCtrl: NavController,private loadingCtrl: LoadingController, public navParams: NavParams) {
    this.http.get(this.dataService.baseUrl+'Patient/'+this.dataService.patientId).map(res=>
      res
    ).subscribe(res=>{
      console.log(res)
      this.response=res
    }
    )
    
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  onChangePassword(form:NgForm){
    const loading = this.loadingCtrl.create({
      content: 'Updating Password'
    });

     loading.present();
    this.response.password=form.value.newpassword;
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    this.http.put('http://172.16.1.15:3000/api/Patient/'+this.dataService.patientId,this.response,{headers:headers}).map(res=>
     //alert(res)
     res
    ).subscribe(res=>{
      loading.dismiss()
      alert("Successfully Updated Password")
      console.log(res);
      this.navCtrl.setRoot(SigninPage)
    })
  }
}
