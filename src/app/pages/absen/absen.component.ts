import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';

@Component({
  selector: 'app-absen',
  templateUrl: './absen.component.html',
  styleUrls: ['./absen.component.css']
})
export class AbsenComponent implements OnInit {
  login = new Login()
  kondisi:boolean
  kId:string
  constructor(private route: Router, private uploadService: AppService, private router: ActivatedRoute, private sessionService: StorageService) { }

  ngOnInit(): void {
  }


  absen(){
    this.router.queryParams
    .subscribe(params => {
        if(params.comp == 'materi'){
          this.setAbsen();
          this.route.navigate(['/user-upload'], {queryParams: {hId: params.hId, kId:params.kId, nama:params.nama, title:params.title}});  
        }else if(params.comp == 'quiz'){
          this.setAbsen();
          this.route.navigate(['/user-kuis'], {queryParams: {hId: params.hId, kId:params.kId, nama:params.nama, title:params.title}})
        }else{
          this.setAbsen();
          this.route.navigate(['/user'], {queryParams: {hId: params.hId, kId:params.kId, nama:params.nama, title:params.title}})
        }
      })
  }

  setAbsen(){
    this.login = this.sessionService.getId()
    this.router.queryParams
    .subscribe(params => {
    this.uploadService.setAbsen(this.login.idUser, params.kId).subscribe(data=>{
    })
  })
  }

  getBack(){
    this.kId = this.sessionService.getKelas()
    this.router.queryParams.subscribe(params=>{
      this.route.navigate(['/topic-materi'], {queryParams:{kId:this.kId}})
    })
  }
}
