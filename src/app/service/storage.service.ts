import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  TOKEN_KEY = 'id';
  // USER_KEY = 'auth-user';

  constructor() { }

  saveStorage(token : string){
    // window.sessionStorage.removeItem(this.TOKEN_KEY)
    localStorage.setItem(this.TOKEN_KEY, token)
  }

  getToken():string{
    return sessionStorage.getItem(this.TOKEN_KEY)
  }
}
