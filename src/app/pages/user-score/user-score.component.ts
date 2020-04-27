import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-user-score',
  templateUrl: './user-score.component.html',
  styleUrls: ['./user-score.component.css']
})
export class UserScoreComponent implements OnInit {

  dataScore:any[]
  constructor(private uploadService: AppService, private route: ActivatedRoute, private router: Router) {
    this.getDetailScore()
   }

  ngOnInit(): void {
  }

  getDetailScore(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getDetailScore(params.uId, params.mpId).subscribe(data=>{
        this.dataScore=data
        console.log(data);
      })
    })
  }
}
