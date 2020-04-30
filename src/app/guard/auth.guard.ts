import { TokenStorageService } from './../service/token-storage.service';
import { AuthService } from './../service/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router : Router, private authService : AuthService, private tokenStorage : TokenStorageService){}

  canActivate(route : ActivatedRouteSnapshot) : boolean {
    const expectedRole = route.data.expectedRole;
    const role = this.tokenStorage.getUser().roles;

    if (this.authService.isLogin() && role.includes(expectedRole)) {
      return true;
    }else{
      return false;
    }
  }
  
}
