import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-user-class',
  templateUrl: './user-class.component.html',
  styleUrls: ['./user-class.component.css']
})
export class UserClassComponent implements OnInit {
  kelas:any[]
  constructor(private route: ActivatedRoute, private router: Router, private uploadService: AppService) {
    this.getDetailKelass()
   }

  ngOnInit(): void {
  }


  getDetailKelass(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getDetailScoreKelas(params.kId).subscribe(data=>{
        this.kelas=data
        console.log(data);
      })
    })
  }
}
