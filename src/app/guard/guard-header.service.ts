import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardHeaderService {

  constructor() { }
  guardHeader() {
    const headers = new HttpHeaders();
    return headers.set('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrYXJ0emh1Yl9zdWJzY3JpcHRpb25fc3RhdHVzIjoiQUNUSVZFIiwidXNlcl9lbWFpbCI6IjIzNThAa2FydHpodWIuY29tIiwiZXhwaXJlc19hdCI6MTYzMjY2ODk1MDk3MCwidXNlcl9mdWxsX25hbWUiOiJrYXJ0emh1YiBhZ2VudCIsImthcnR6aHViX3VzZXJfaWQiOjIzNTh9.cROGEbSzuvjyuwJ_Y_h1uEncEnd8s-hEq_vuchIk_qo')
  }
}
