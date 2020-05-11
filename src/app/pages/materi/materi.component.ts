import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Materi } from 'src/app/layouts/model/materi';
import { Category } from 'src/app/layouts/model/category';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';

@Component({
  selector: 'app-materi',
  templateUrl: './materi.component.html',
  styleUrls: ['./materi.component.css']
})
export class MateriComponent implements OnInit {

  // dataMateri : Hari[];
  dataCategory: Category[];
  dataCategoryUser:Category[]
  login = new Login()
  
  constructor(private sessionService: StorageService, private uploadService: AppService, private storageService: StorageService, private route: ActivatedRoute,private router: Router) {
    
   }

  ngOnInit(): void {
    this.getMateriList()
    this.getKelasUser()
  }

  getMateriList(){
    this.uploadService.getMateriUser().subscribe(data=>{
      this.dataCategory=data
      console.log(data);
    });
  }

  getTitle(nama:string){
    window.localStorage.setItem('title', nama)
    console.log(nama);
    
  }

  getKelasUser(){
    this.login = this.sessionService.getId()
    console.log(this.login);
    this.uploadService.getKelasUser(this.login.idUser).subscribe(data=>{
      this.dataCategoryUser=data
      console.log(data);
    });
  }
}
