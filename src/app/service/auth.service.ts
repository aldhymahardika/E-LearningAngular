import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const AUTH_API = 'http://1bcbd246.ngrok.io/api/auth/'

const httpOptions = {
  headers : new HttpHeaders({ 'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http : HttpClient, private tokenStorage : TokenStorageService) { }

  login(credentials) : Observable<any>{
    return this.http.post(AUTH_API+ 'signin',{
      username : credentials.username,
      password : credentials.password
    }, httpOptions);
  }

  register(user) : Observable<any>{
    return this.http.post(AUTH_API+ 'signup',{
      nama : user.nama,
      username : user.username,
      email : user.email,
      password : user.password 
    }, httpOptions);
  }

  registerPengajar(user) : Observable<any>{
    return this.http.post(AUTH_API+ 'signup', user , httpOptions);
  }

  isLogin() : boolean {
    if (this.tokenStorage.getToken()) {
      return true
    } else {
      return false
    }
  }
}
