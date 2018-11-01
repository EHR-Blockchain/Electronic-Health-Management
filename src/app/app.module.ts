import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { HttpClientModule } from '@angular/common/http';
import { PatientsPage } from '../pages/patients/patients';
import { ProfilePage } from '../pages/profile/profile';
import { PatientmedicalrecordPage } from '../pages/patientmedicalrecord/patientmedicalrecord';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { SigninPage } from '../pages/signin/signin';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PatientsPage,
    ProfilePage,
    PatientmedicalrecordPage,
    QrcodePage,
    SigninPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PatientsPage,
    ProfilePage,
    PatientmedicalrecordPage,
    QrcodePage,
    SigninPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider,
    BarcodeScanner
  ]
})
export class AppModule {}
