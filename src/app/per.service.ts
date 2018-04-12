import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PerService {

  constructor( private http: Http ) { }
  getDetails() {
    return this.http.get('http://localhost:3000/api/details')
      .map(res => res.json());
  }
  addDetail(info) {
    return this.http.post('http://localhost:3000/api/details/', info)
      .map(res => res.json());
  }
  getDetail(id) {
    return this.http.get('http://localhost:3000/api/details/' + id)
      .map(res => res.json());
  }
  deleteDetail(id) {
    return this.http.delete('http://localhost:3000/api/details/' + id)
      .map(res => res.json());
  }
  updateDetail(id , info) {
    return this.http.put('http://localhost:3000/api/details/' + id, info)
      .map(res => res.json());
  }
}
