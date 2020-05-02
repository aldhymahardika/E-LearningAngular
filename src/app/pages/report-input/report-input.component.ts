import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Nilai } from 'src/app/layouts/model/nilai';

@Component({
  selector: 'app-report-input',
  templateUrl: './report-input.component.html',
  styleUrls: ['./report-input.component.css']
})
export class ReportInputComponent implements OnInit {
  dataNilai = new Nilai()
  details:any[]
  exampleFlag=false;
  msg:string
  dataScore:any[]

  constructor(private uploadService: AppService, private route: ActivatedRoute, private router: Router) { 
    this.getDetailUser();
    this.getDetailScore()
  }

  ngOnInit(): void {
  }

  getDetailUser(){
    this.route.queryParams
    .subscribe(params=>{
      console.log(params);
      
      this.uploadService.getDetailUser(params.kId, params.uId).subscribe(data=>{
        this.details=data
        console.log(data);
      })
    })
  }

  updateNilai(data:any){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.setNilaiKuis(params.kId, params.uId, this.dataNilai.nilaiKehadiran, this.dataNilai.jenis, this.dataNilai.nilaiUtama, this.dataNilai.tanggal).subscribe(data=>{
        this.msg=data
        console.log(this.dataNilai);
        console.log(data);        
      })
    })
  }

  input(data, el:HTMLElement){
    this.route.queryParams
    .subscribe(params=>{
      this.dataNilai.jenis= data.jenis
      this.dataNilai.kelas=params.kId
      this.dataNilai.user=params.uId
      // this.dataNilai.nilaiUtama
      // this.dataNilai.nilaiKehadiran
      this.dataNilai.tanggal=data.tanggalSoal
      el.scrollIntoView({behavior : 'smooth'})
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

  downloadFileUser(datas){
    this.route.queryParams
    .subscribe(params => {
   let resp = this.uploadService.downloadFileUser(datas).subscribe((data) => 
   { const url= window.URL.createObjectURL(data)
   window.open(url) 
   })
  }) 
  }

  getDetailScore(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getDetailScore(params.uId, params.kId).subscribe(data=>{
        this.dataScore=data
        console.log(data);
        console.log(params);
        
      })
    })
  }
}
