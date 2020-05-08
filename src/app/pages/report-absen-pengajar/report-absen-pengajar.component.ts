import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Login } from 'src/app/layouts/model/login';
import { ReportJadwal } from 'src/app/layouts/model/reportJadwal';
import { StorageService } from 'src/app/service/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-report-absen-pengajar',
  templateUrl: './report-absen-pengajar.component.html',
  styleUrls: ['./report-absen-pengajar.component.scss']
})
export class ReportAbsenPengajarComponent implements OnInit {
  @ViewChild('dt') table: Table;
  isupdated = false; 
  login = new Login()
  dataMateri: any[];
  materi:any;
  dataKelas:any[];
  kelas:any;
  datas:any[]
  jadwal = new ReportJadwal()
  data1:string
  date:Date = null
  constructor(private uploadService: AppService, private route: ActivatedRoute, private router: Router, private sessionService: StorageService) { }

  ngOnInit(): void {
    this.getKelasPengajarReport()
    this.getMateriPengajarReport()
  }

  getKelasPengajarReport(){
    this.login = this.sessionService.getId()
    console.log(this.login);
    this.uploadService.getKelasPengajarReport(this.login.idUser).subscribe(data=>{
      this.dataKelas=data
      console.log(data);
    });
  }    

  getMateriPengajarReport(){
    this.login = this.sessionService.getId()
    console.log(this.login);
    this.uploadService.getMateriPengajarReport(this.login.idUser).subscribe(data=>{
      this.dataMateri=data
      console.log(data)
    });
  }

  getAbsenPengajar(mId:string, cId:string){
    this.login = this.sessionService.getId()
    this.uploadService.getAbsenPengajar(mId, cId).subscribe(data=>{
      this.datas=data
      console.log(data);
      
    })
  }

  getDownloadAbsenPengajar(mId:string, cId:string){
    this.uploadService.getDownloadAbsenPengajar(mId, cId).subscribe(data=>{
      const url= window.URL.createObjectURL(data)
      window.open(url)
    })
  }

  getBack(){
    this.router.navigate(['/report-menu-pengajar'])
  }
}
