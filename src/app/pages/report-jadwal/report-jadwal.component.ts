import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ReportJadwal } from 'src/app/layouts/model/reportJadwal';
import { parse } from 'querystring';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-report-jadwal',
  templateUrl: './report-jadwal.component.html',
  styleUrls: ['./report-jadwal.component.css']
})
export class ReportJadwalComponent implements OnInit {
  jadwal = new ReportJadwal()
  reportAll:any[]
  date:Date = null
  data1:string
  data2:string
  constructor(private uploadService: AppService) {
    this.getReportAllJadwal()
   }

  ngOnInit(): void {
  }

  getReportAllJadwal(){
    this.uploadService.getReportAllJadwal().subscribe(data=>{
      this.reportAll=data
      console.log(data);
      
    })
  }

  getReportJadwal(){
    var datePipe = new DatePipe('en-US')
    this.data1= datePipe.transform(this.jadwal.tgl1, 'yyyy-MM-dd')
    this.data2= datePipe.transform(this.jadwal.tgl2, 'yyyy-MM-dd')
    // console.log(this.data1);
    
    // var momentVariable = moment(this.jadwal.tgl1, 'MM-DD-YYYY');
    // var stringvalue = momentVariable.format('YYYY-MM-DD');
    // this.date = parse(this.jadwal.tgl1, 'YYYY-MM-DD', new Date())
    this.uploadService.getReportJadwal(this.data1, this.data2).subscribe(data=>{
      this.reportAll=data
    })
  }

}
