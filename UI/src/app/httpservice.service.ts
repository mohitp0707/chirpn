import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class ApiService {
 
  baseURL: string = "http://localhost:8000/api/";
 
  constructor(private http: HttpClient) {
  }
 
  gettask(){
    console.log('getPeople '+this.baseURL + 'people')
    return this.http.get(this.baseURL + 'alllist')
  }
 
  addtask(data) {
    console.log(data);
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(this.baseURL + 'add', body,{'headers':headers})
  }

  update(data,id) {
    console.log(data);
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(this.baseURL + 'update' + '/' + id, body,{'headers':headers})
  }

  deletedata(id) {
    const headers = { 'content-type': 'application/json'}  
    return this.http.post(this.baseURL + 'delete' + '/' + id, {'headers':headers})
  }
}