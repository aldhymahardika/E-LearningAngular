import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from 'src/app/layouts/model/login';
import { StorageService } from 'src/app/service/storage.service';
import { AppService } from 'src/app/service/app.service';
import { Kelas } from 'src/app/layouts/model/kelas';
import { Category } from 'src/app/layouts/model/category';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-report-nilai-peserta',
  templateUrl: './report-nilai-peserta.component.html',
  styleUrls: ['./report-nilai-peserta.component.scss']
})
export class ReportNilaiPesertaComponent implements OnInit {
  login = new Login()
  kelas: Kelas[];
  materi: Category[]
  setMateri: Category
  setKelas:Kelas
  exampleFlag=false
  nilai:any[]
  @ViewChild('dt') table: Table;
  constructor(private sessionService: StorageService, private uploadService: AppService) {
    // this.getMateriList()
    // this.getKelasList()
    // this.getReportAllNilai()
   }

  ngOnInit(): void {
    this.getReportAllNilai()
    this.getMateriList()
    this.getKelasList()
  }

  getMateriList(){
    this.login = this.sessionService.getId()
    this.uploadService.getAllMateriUser(this.login.idUser).subscribe(data=>{
      this.materi=data
      console.log(data);
    });
  }

  getKelasList(){
    this.login = this.sessionService.getId()
    // this.materi.category.id=this.selectedCity1.id;
    this.uploadService.getAllKelasUser(this.login.idUser).subscribe(data=>{
      this.kelas=data
      console.log(data)
    });
  }

  getReportAllNilai(){
    this.login = this.sessionService.getId()
    this.uploadService.getReportAllNilai(this.login.idUser).subscribe(data=>{
      this.nilai=data
      console.log(data);
      
    })
  } 
  
  getReportNilai(cId:string, mpId:string){
    this.login = this.sessionService.getId()
    // console.log(cId);
    // console.log(mpId);
    // console.log(this.login.idUser);
    this.uploadService.getReportNilai(this.login.idUser, cId, mpId).subscribe(data=>{
      this.nilai=data
      console.log(data);
    })
  }

  getDownloadNilai(cId:string, mId:string){
    this.login = this.sessionService.getId()
    console.log(cId);
    console.log(mId);
    
    
    this.uploadService.getDownloadNilai(this.login.idUser, cId, mId).subscribe(data=>{
      const url= window.URL.createObjectURL(data)
      window.open(url)
    })
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
