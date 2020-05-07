import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Ujian } from 'src/app/layouts/model/ujian';
import { Message } from 'primeng/api/message';

@Component({
  selector: 'app-detail-ujian',
  templateUrl: './detail-ujian.component.html',
  styleUrls: ['./detail-ujian.component.css']
})
export class DetailUjianComponent implements OnInit {

  data=new Ujian()
  msgs: Message[] = [];
  isupdated = false;
  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  getUpdateQuiz(kuis:Ujian){
    this.route.queryParams
      .subscribe(params=>{
      this.data.id=params.idFile
      this.data.start_date=kuis.start_date
      this.data.end_date=kuis.end_date
      this.data.startTime=kuis.startTime
      this.data.endTime=kuis.endTime
      this.uploadService.getUpdateQuiz(params.idFile, kuis.start_date, kuis.end_date, kuis.startTime, kuis.endTime).subscribe(data=>{this.showSuccess()  })
        this.isupdated=true
        this.showSuccess()
    })
  }

  showSuccess() {
    this.msgs = [];
	  this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
  }

  getBack(){
    this.route.queryParams.subscribe(params=>{
      this.router.navigate(['/tables-report'], {queryParams: {kId:params.kId}})
    })
  }
}
