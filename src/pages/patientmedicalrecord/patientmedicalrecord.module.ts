import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientmedicalrecordPage } from './patientmedicalrecord';

@NgModule({
  declarations: [
    PatientmedicalrecordPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientmedicalrecordPage),
  ],
})
export class PatientmedicalrecordPageModule {}
