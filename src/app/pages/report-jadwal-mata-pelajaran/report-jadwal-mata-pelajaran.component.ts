import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { AdminMateri } from 'src/app/layouts/model/admin-materi';
import { AdminKelas } from 'src/app/layouts/model/admin-kelas';
import { ReportMapel } from 'src/app/layouts/model/reportMapel';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-jadwal-mata-pelajaran',
  templateUrl: './report-jadwal-mata-pelajaran.component.html',
  styleUrls: ['./report-jadwal-mata-pelajaran.component.scss']
})
export class ReportJadwalMataPelajaranComponent implements OnInit {
  materi: AdminMateri[]
  dataMateri:AdminMateri
  kelas: AdminKelas[]
  dataKelas:AdminKelas
  mapels:any[]
  mapel = new ReportMapel()
  exampleFlag=true
  @ViewChild('dt') table: Table;

  constructor(private adminService: AppService, private route: Router) {
    this.mapel.cId=new AdminKelas
    this.mapel.mId= new AdminMateri
    this.getMateri()
    this.getKelas()
    this.getReportAllMapel()
   }

  ngOnInit(): void {
  }

  getMateri(){
    this.adminService.getMateri().subscribe(data=>{ 
      console.log(data);
      this.materi = data
    })
  }

  getKelas(){
    this.adminService.getKelasList().subscribe(data=>{
      console.log(data);
      this.kelas = data
    })
  }

  getReportAllMapel(){
    this.adminService.getReportAllMapel().subscribe(data=>{
      this.mapels=data
      console.log(data);
      
    })
  }

  getReportMapel(){
    this.mapel.cId.id=this.dataKelas.id
    this.mapel.mId.id=this.dataMateri.id
    this.adminService.getReportMapel(this.mapel.cId.id, this.mapel.mId.id).subscribe(data=>{
      this.mapels=data
    })
  }

  getDownloadMapel(){
    this.mapel.cId.id=this.dataKelas.id
    this.mapel.mId.id=this.dataMateri.id
    this.adminService.getDownloadMapel(this.mapel.cId.id, this.mapel.mId.id).subscribe(data=>{
      const url= window.URL.createObjectURL(data)
      window.open(url)
    })
  }

  getBack(){
    this.route.navigate(['/report-menu'])
  }

  localClick(x) {
    if(x==1){
    this.exampleFlag=true;
    }
    else{
    this.exampleFlag=false;
    }
  }
}
