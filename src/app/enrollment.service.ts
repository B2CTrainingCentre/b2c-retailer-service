import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Retailer} from "./retailer";

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = '';
  constructor(private _http: HttpClient) { }

  enroll(retailer: Retailer){

    console.log('Success!', retailer);
    //return this._http.post<any>(this._url, retailer);
  }
}
