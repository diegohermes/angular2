import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersListService {

  constructor(private http: Http) {}

  public getBikers(): Observable<any> {
    return this.http
      .get("assets/bikers.json")
      .map((res:any) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}