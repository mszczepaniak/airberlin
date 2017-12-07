import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ParticipantsService {
  private API_URL = `http://uinames.com/api/?amount=5`;
  constructor(private http: Http) {}

  getParticipants() {
    return this.http.get(this.API_URL)
      .map(data => data.json());
  }
}
