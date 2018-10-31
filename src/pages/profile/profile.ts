import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataServiceProvider} from '../../providers/data-service/data-service'
import { HttpClient} from '@angular/common/http';
import { Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
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
  profile: any;
  src='';
  constructor(public http: HttpClient,private dataService:DataServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  //   this.http.get('https://api.github.com/users/cruzer3008')
  //  .map(res=>
  //    console.log(res)
  //  );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  
  getPatientProfile()
  {
    this.dataService.getPatientProfile().subscribe((res)=>{
      console.log(res)
      this.profile=res
    })
    
  }
   
}
