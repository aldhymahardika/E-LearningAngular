import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { AdminKelas } from 'src/app/layouts/model/admin-kelas';
import { AdminMateri } from 'src/app/layouts/model/admin-materi';
import { ReportMapel } from 'src/app/layouts/model/reportMapel';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-report-peserta',
  templateUrl: './report-peserta.component.html',
  styleUrls: ['./report-peserta.component.scss']
})
export class ReportPesertaComponent implements OnInit {
  materi: AdminMateri[]
  dataMateri:AdminMateri
  kelas: AdminKelas[]
  dataKelas:AdminKelas
  mapel = new ReportMapel()
  peserta:any[]
  exampleFlag=true
  @ViewChild('dt') table: Table;
  
  constructor(private adminService: AppService, private route: Router) {
    this.mapel.cId=new AdminKelas
    this.mapel.mId= new AdminMateri
    this.getMateri()
    this.getKelas()
    this.getReportAllPeserta()
   }

  ngOnInit(): void {
  }

  getMateri(){
    this.adminService.getMateri().subscribe(data=>{ 
      this.materi = data
    })
  }

  getKelas(){
    this.adminService.getKelasList().subscribe(data=>{
      this.kelas = data
    })
  }
  
  getReportAllPeserta(){
    this.adminService.getReportAllPeserta().subscribe(data=>{
      this.peserta=data
      console.log(data);
      
    })
  }

  getReportPeserta(){
    this.mapel.cId.id=this.dataKelas.id
    this.mapel.mId.id=this.dataMateri.id
    this.adminService.getReportPeserta(this.mapel.cId.id, this.mapel.mId.id).subscribe(data=>{
      this.peserta=data
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

  getDownloadPeserta(){
    this.mapel.cId.id=this.dataKelas.id
    this.mapel.mId.id=this.dataMateri.id
    this.adminService.getDownloadPeserta(this.mapel.cId.id, this.mapel.mId.id).subscribe(data=>{
      const url= window.URL.createObjectURL(data)
      window.open(url)
    })
  }
}
