import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PatientsPage } from '../pages/patients/patients';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { ProfilePage } from '../pages/profile/profile';
import { PatientmedicalrecordPage } from '../pages/patientmedicalrecord/patientmedicalrecord';
import { SigninPage } from '../pages/signin/signin';
import { AboutPage } from '../pages/about/about';
import { NfcPage } from '../pages/nfc/nfc';

@Component({
  templateUrl: 'app.html',
  providers: [DataServiceProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any =SigninPage;
  
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      
      {title:'Profile',component:ProfilePage},
      
      {title: 'Medical Records',component:PatientmedicalrecordPage},
      // {title:'NFC',component:NfcPage},
      {title: 'About',component:AboutPage}
      
    ];

  }

  initializeApp() {
    // this.platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   this.statusBar.styleDefault();
    //   this.splashScreen.hide();
    // });
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      if (this.platform.is('android')) {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#000000');
    }
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
