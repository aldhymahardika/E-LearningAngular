import { AuthService } from './../../service/auth.service';
import { TokenStorageService } from './../../service/token-storage.service';
import { Router } from '@angular/router';
import { Login } from './../../layouts/model/login';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: any = {};
  roles: string[] = [];
  message = "Username/Password Salah"
  showMessage = false
  login = new Login()

  constructor(private router : Router, private tokenStorage : TokenStorageService, private authService : AuthService) {
    if(window.localStorage.getItem('auth-user') != null){
        this.login = (JSON.parse(window.localStorage.getItem('auth-user')));
        this.masuk()
    }
  }

  ngOnInit() {
    // if(window.sessionStorage.getItem('auth-user') != null){
    //   this.login = (JSON.parse(window.sessionStorage.getItem('auth-user')));
    //   this.masuk()
    // }
  }
  ngOnDestroy() {
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {        
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.roles = this.tokenStorage.getUser().roles;
        this.login = (JSON.parse(window.localStorage.getItem('auth-user')));
        console.log(this.login)
        this.masuk()
      },
      err => {
        this.showMessage = true
      }
    );
  }

  masuk(){
    if (this.login.roles[0] == 'ROLE_ADMIN') {
      this.router.navigateByUrl('/admin')
    }else if (this.login.roles[0] == 'ROLE_PENGAJAR') {
      this.router.navigateByUrl('/jadwal-pengajar')
    }else if (this.login.roles[0] == 'ROLE_USER'){
      this.router.navigateByUrl('/materi')
    }
  }

  reloadPage() {
    window.location.reload();
  }

}
