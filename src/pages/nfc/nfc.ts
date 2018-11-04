import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';
/**
 * Generated class for the NfcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nfc',
  templateUrl: 'nfc.html',
})
export class NfcPage {
  message:any;
  id:any
  payload:any =[]
  patid:any;
  a:any;
  constructor(private nfc: NFC, private ndef: Ndef,public navCtrl: NavController, public navParams: NavParams) {
    this.nfc.addNdefListener(() => {
      console.log('successfully attached ndef listener');
      //alert('successfully attached ndef listener')
    }, (err) => {
      console.log('error attaching ndef listener', err);
      alert('error attaching ndef listener')
    }).subscribe((event) => {
      this.message=event.tag
      console.log('received ndef message. the tag contains: ', event);
      //alert(event.tag.ndefMessage[0].payload)
      this.payload=event.tag.ndefMessage[0].payload
      console.log('decoded tag id', this.nfc.bytesToString(event.tag.ndefMessage[0].payload));
      this.patid=this.nfc.bytesToString(event.tag.ndefMessage[0].payload)
      this.a= this.patid.slice(3)
      this.id=event.tag.id
     //alert(event.tag.id)
    
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NfcPage');
  }

}
