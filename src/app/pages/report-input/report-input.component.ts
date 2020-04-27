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
  constructor(private uploadService: AppService, private route: ActivatedRoute, private router: Router) { 
    this.getDetailUser();
  }

  ngOnInit(): void {
  }

  getDetailUser(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getDetailUser(params.kId, params.uId).subscribe(data=>{
        this.details=data
        console.log(data);
      })
    })
  }

  updateNilai(data:any){
    this.route.queryParams
    .subscribe(params=>{
      this.dataNilai.jenis= data.jenis
      this.dataNilai.kelas=params.kId
      this.dataNilai.user=params.uId
      this.dataNilai.nilaiUtama
      this.dataNilai.nilaiKehadiran
      this.uploadService.setNilaiKuis(params.kId, params.uId, this.dataNilai.nilaiKehadiran, data.jenis, this.dataNilai.nilaiUtama).subscribe(data=>{
        this.msg=data
        console.log(this.dataNilai);
        console.log(data);        
      })
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
