import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Message} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-tables-report',
  templateUrl: './tables-report.component.html',
  styleUrls: ['./tables-report.component.css']
})
export class TablesReportComponent implements OnInit {

  dataFile:any
  dataUjian:any

constructor(private uploadService: AppService, private route: ActivatedRoute, private router: Router, private messageService: MessageService ) { 
    // this.getListMateri();
    this.getKelas();
    this.getQuiz();
  }

  ngOnInit(): void {
  }


  getKelas(){
    this.route.queryParams
    .subscribe(params => {
    this.uploadService.getKelas(params.kId).subscribe(data=>{
      this.dataFile=data
      console.log(data);
    })
  })
  }

  getDeleteMateri(headerid:string){
    this.uploadService.deleteMateri(headerid).subscribe(data=>{ })
  }

  getDeleteSoal(headerid:string){
    this.uploadService.deleteSoal(headerid).subscribe(data=>{ })
  }

  getQuiz(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getListQuiz(params.kId).subscribe(data=>{
        this.dataUjian=data
        console.log(data);
      })
    })
  }

  getDetailMateri(idFile:string){
    this.router.navigate(['/list-file'], {queryParams: {idFile:idFile}})
  }

  getDetailKuis(idFile:string){
    this.router.navigate(['/list-ujian'], {queryParams: {idFile:idFile}})
  }

  getUpdateMateri(idFile:string){
    this.router.navigate(['/detail-materi'], {queryParams: {idFile:idFile}})
  }

  getUpdateUjian(idFile:string){
    this.router.navigate(['/detail-ujian'], {queryParams: {idFile:idFile}})
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
  }

  onConfirm() {
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }

}
