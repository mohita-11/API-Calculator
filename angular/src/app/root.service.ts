import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(private http: HttpClient) { }


  postAPIData() {
    return this.http.post('http://localhost:3000/api/customers/send', { 'email': '', 'password': '' })
  }
}
