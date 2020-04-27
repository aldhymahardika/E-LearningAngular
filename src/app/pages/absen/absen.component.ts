import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-absen',
  templateUrl: './absen.component.html',
  styleUrls: ['./absen.component.css']
})
export class AbsenComponent implements OnInit {
  
  kondisi:boolean

  constructor(private route: Router, private uploadService: AppService, private router: ActivatedRoute) { }

  ngOnInit(): void {
  }


  absen(){
    let idUser='1'
    this.router.queryParams
    .subscribe(params => {
        if(params.comp == 'materi'){
          this.setAbsen();
          this.route.navigate(['/user-upload'], {queryParams: {hId: params.hId, kId:params.kId}});  
        }else if(params.comp == 'quiz'){
          this.setAbsen();
          this.route.navigate(['/user-kuis'], {queryParams: {hId: params.hId, kId:params.kId}})
        }else{
          this.setAbsen();
          this.route.navigate(['/user'], {queryParams: {hId: params.hId, kId:params.kId}})
        }
      })
  }

  setAbsen(){
    let idUser='1'
    this.router.queryParams
    .subscribe(params => {
    this.uploadService.setAbsen(idUser, params.kId).subscribe(data=>{
    })
  })
  }
}
