import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-materi',
  templateUrl: './list-materi.component.html',
  styleUrls: ['./list-materi.component.css']
})
export class ListMateriComponent implements OnInit {

  peserta:any[]
  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router) {
    this.getListUser()
   }

  ngOnInit(): void {
  }
  
  getListUser(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getListUser(params.kId).subscribe(data=>{
        this.peserta=data
        console.log(data);
      })
    })
  }

  getNilai(user_id:string){
    this.route.queryParams
    .subscribe(params=>{
      this.router.navigate(['/report-input'], {queryParams: {kId: params.kId, uId:user_id}})
    })
  }
}
