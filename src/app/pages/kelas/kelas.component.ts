import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';
import { AppService } from 'src/app/service/app.service';
import { Login } from 'src/app/layouts/model/login';

@Component({
  selector: 'app-kelas',
  templateUrl: './kelas.component.html',
  styleUrls: ['./kelas.component.css']
})
export class KelasComponent implements OnInit {
  
  dataKelas: any[];
  login= new Login()
  constructor(private sessionService: StorageService, private uploadService: AppService, private storageService: StorageService, private route: ActivatedRoute,private router: Router) {
    this.getListKelasMateri()
   }

  ngOnInit(): void {
  }

  getListKelasMateri(){
    this.login = this.sessionService.getId()
    this.uploadService.getListKelasMateri(this.login.idUser).subscribe(data=>{
      this.dataKelas=data
      console.log(data);
      
    })
  }

  getData(title:string, clases:string){
    this.sessionService.setNamaMateri(title)
    this.sessionService.setNamaKelas(clases)
    // window.localStorage.setItem('materi', title)
    // window.localStorage.setItem('kelas', clases)
  }
}
