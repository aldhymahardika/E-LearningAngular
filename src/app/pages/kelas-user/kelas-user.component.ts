import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/layouts/model/category';
import { AppService } from 'src/app/service/app.service';
import { StorageService } from 'src/app/service/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/layouts/model/login';

@Component({
  selector: 'app-kelas-user',
  templateUrl: './kelas-user.component.html',
  styleUrls: ['./kelas-user.component.css']
})
export class KelasUserComponent implements OnInit {
  dataCategory:Category[]
  login = new Login()
  constructor(private sessionService: StorageService ,private uploadService: AppService, private storageService: StorageService, private route: ActivatedRoute,private router: Router) {
    this.getKelasUser()
   }

  ngOnInit(): void {
  }

  getKelasUser(){
    this.login = this.sessionService.getId()
    console.log(this.login);
    this.uploadService.getKelasUser(this.login.idUser).subscribe(data=>{
      this.dataCategory=data
      console.log(data);
    });
  }

}
