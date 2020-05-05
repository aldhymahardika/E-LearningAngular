import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ReportJadwal } from 'src/app/layouts/model/reportJadwal';

@Component({
  selector: 'app-report-jadwal',
  templateUrl: './report-jadwal.component.html',
  styleUrls: ['./report-jadwal.component.css']
})
export class ReportJadwalComponent implements OnInit {
  jadwal = new ReportJadwal()
  reportAll:any[]
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
    // var momentVariable = moment(this.jadwal.tgl1, 'MM-DD-YYYY');
    // var stringvalue = momentVariable.format('YYYY-MM-DD');
    this.uploadService.getReportJadwal(this.jadwal.tgl1, this.jadwal.tgl2).subscribe(data=>{
      this.reportAll=data
    })
  }

}
