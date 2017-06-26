import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Biker } from './../classes/biker';

@Injectable()
export class UsersListService {

  private bikers: Biker[];
  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'assets/';
  }

  /**
  * Returns a promise for the Biker
  */
  // public getLocations():Promise<Biker[]> {
  //   let that = this;

  //   return this.http.get(this.statesUrl)
  //   .toPromise()
  //   .then(response => that.transformData(response))
  //   .catch(this.handleError);
  // }


  getBikers() {
    if (this.bikers) {
      console.log('entrou');
      return Observable.of(this.bikers);
    } else {
      return this.http.get(this.baseUrl  + 'bikers.json')
        .map((res: Response) => res.json().results)
        .do((data) => { this.bikers = data; });
    }
  }



}