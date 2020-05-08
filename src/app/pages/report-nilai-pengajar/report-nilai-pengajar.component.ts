import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Login } from 'src/app/layouts/model/login';
import { StorageService } from 'src/app/service/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Category } from 'src/app/layouts/model/category';
import { Kelas } from 'src/app/layouts/model/kelas';
import { ReportJadwal } from 'src/app/layouts/model/reportJadwal';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-report-nilai-pengajar',
  templateUrl: './report-nilai-pengajar.component.html',
  styleUrls: ['./report-nilai-pengajar.component.scss']
})
export class ReportNilaiPengajarComponent implements OnInit {
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
    this.getMateriPengajarReport()
    this.getKelasPengajarReport()
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

  getReportRincianNilai(mId:string, cId:string, period:string){
    var datePipe = new DatePipe('en-US')
    this.data1= datePipe.transform(this.jadwal.tgl1, 'yyyy-MM-dd')
    console.log(this.data1);
    this.uploadService.getReportRincianNilai(mId, cId, this.data1).subscribe(data=>{
     this.datas=data
     console.log(data);
     
    })
  }
  getDownloadReportRincianNilai(mId:string, cId:string, period:string){
    var datePipe = new DatePipe('en-US')
    this.data1= datePipe.transform(this.jadwal.tgl1, 'yyyy-MM-dd')
    console.log(this.data1);
    this.uploadService.getDownloadReportRincianNilai(mId, cId, this.data1).subscribe(data=>{
      const url= window.URL.createObjectURL(data)
      window.open(url)
    })
  }

  getBack(){
    this.router.navigate(['/report-menu-pengajar'])
  }
}
