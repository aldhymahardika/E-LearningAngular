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
  jadwal: any[]

  constructor(private sessionService: StorageService, private uploadService: AppService, private storageService: StorageService, private route: ActivatedRoute,private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getListKelasMateri()
    this.getJadwalPengajar()
  }
  getListKelasMateri(){
    this.login = this.sessionService.getId()
    this.uploadService.getListKelasMateri(this.login.idUser).subscribe(data=>{
      this.dataKelas=data
    })
  }

  getSession(data, kelas:string, materi:string){
    window.localStorage.setItem('kId', data)
    this.sessionService.setNamaKelas(kelas)
    this.sessionService.setNamaMateri(materi)
  }

  getJadwalPengajar(){
    this.login = this.sessionService.getId()
    this.uploadService.getJadwalPengajar(this.login.idUser).subscribe(data=>{
      this.jadwal=data
    })
  }

}
