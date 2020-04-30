import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';
import { AppService } from 'src/app/service/app.service';
import { Materi } from 'src/app/layouts/model/materi';
import { Login } from 'src/app/layouts/model/login';

@Component({
  selector: 'app-materi-pengajar',
  templateUrl: './materi-pengajar.component.html',
  styleUrls: ['./materi-pengajar.component.css']
})
export class MateriPengajarComponent implements OnInit {

  dataKelas: any[];
  login = new Login()
  constructor(private sessionService: StorageService, private uploadService: AppService, private storageService: StorageService, private route: ActivatedRoute,private router: Router) { 
    this.getListKelasMateri()
  }

  ngOnInit(): void {
  }
  getListKelasMateri(){
    this.login = this.sessionService.getId()
    console.log(this.login);
    this.uploadService.getListKelasMateri(this.login.idUser).subscribe(data=>{
      this.dataKelas=data
      console.log(data);
      
    })
  }
}
