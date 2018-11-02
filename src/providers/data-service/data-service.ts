import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {
  baseUrl:string
  patientId: string
  
  constructor(public http: HttpClient) {
    this.baseUrl = 'http://172.16.8.95:3000/api/';
    console.log('Hello DataServiceProvider Provider');
  }
  getPatients()
  {
    return this.http.get(this.baseUrl+'Patient').map(res=>
      res
    );
  }
  getPatientProfile()
  {
    return this.http.get(this.baseUrl+'PatientProfile/'+this.patientId).map(res=>
      res
    );
  }
  signIn(patId:string,password:string)
  {
    this.patientId=patId
    return this.http.get(this.baseUrl+'Patient/'+this.patientId).map(res=>
      res
    ).catch(res => Observable.throw(res))
  }
  getMedicalRecordByPatId()
  {
    return this.http.get(this.baseUrl+'queries/selectMedicalRecordByPatientId?patientId='+this.patientId).map(res=>
      res);
  }
  private catchError(error:Response|any)
  {
    console.log(error);
    return Observable.throw(error.json().error||"Server Error")
    
  }
}
