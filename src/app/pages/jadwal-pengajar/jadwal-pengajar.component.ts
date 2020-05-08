import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';

@Component({
  selector: 'app-jadwal-pengajar',
  templateUrl: './jadwal-pengajar.component.html',
  styleUrls: ['./jadwal-pengajar.component.scss']
})
export class JadwalPengajarComponent implements OnInit {
  
  constructor(private uploadService : AppService, private sessionService: StorageService ) { }
  login = new Login()
  jadwal: any[]

  ngOnInit(): void {
  this.getJadwalPengajar()
  }

  getJadwalPengajar(){
    this.login = this.sessionService.getId()
    this.uploadService.getJadwalPengajar(this.login.idUser).subscribe(data=>{
      this.jadwal=data
      console.log(data);
      
    })
  }
}
