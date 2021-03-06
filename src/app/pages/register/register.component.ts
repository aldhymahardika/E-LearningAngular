import { User } from 'src/app/layouts/model/users';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  daftarUser =  new User()
  message = "Mohon input dengan benar, username minimal 6 karakter"
  showMessage = false
  constructor(private router : Router, private service : AuthService) { }

  ngOnInit() {
  }

  daftar(){
    this.service.register(this.daftarUser).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/login')         
      },
      err => {
        this.showMessage = true
      }
    );
  }


}
