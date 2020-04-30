import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Category } from 'src/app/layouts/model/category';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  kondisi : boolean
  cId : Category;
  login = new Login()

  constructor(private sessionService: StorageService, private route: Router, private router: ActivatedRoute, private uploadService : AppService) { 
    this.router.queryParams
    .subscribe(params => {
      if(params.comp == 'tables'){
        this.getEnrol(params.kId, params.jamid)
        console.log(params);
      }else if(params.comp == 'materi'){
        this.getAbsen()
      }else if(params.comp == 'quiz'){
        this.getAbsen()
      }else{
        this.getAbsen()
      }
    })
  }

  ngOnInit(): void {
    // this.router.queryParams
    // .subscribe(params => {
    // this.getEnrol(params.kId, params.jamid)
    // // this.getTopic(params.id)
    // })
  }


  getEnrol(kId:string, jamid:string){
    // console.log('dawda');
    // let idMateri='1'
    this.login = this.sessionService.getId()
    console.log(this.login);
    // let pengajarId= '1'
    this.router.queryParams
    .subscribe(params => {
      console.log(params);
    this.uploadService.getEnrol(this.login.idUser, params.kId).subscribe(data=>{
      // console.log(data);
      this.kondisi=data
      // console.log(this.kondisi);
      if(this.kondisi==true){
        this.route.navigate(['/enrol'], {queryParams: {id:this.login.idUser, kId:params.kId, jamid:params.jamid}})
      }else{
        this.route.navigate(['/topic-materi'], {queryParams: {id:this.login.idUser, kId:params.kId, jamid:params.jamid}})
      }
    })
  })
  }

  getAbsen(){
    this.login = this.sessionService.getId()
    console.log(this.login);
    this.router.queryParams
    .subscribe(params=>{
      this.uploadService.getAbsen(this.login.idUser, params.kId).subscribe(data=>{
        this.kondisi=data
        if(this.kondisi==false){
          this.route.navigate(['/absen'], {queryParams: {comp: params.comp, userId: this.login.idUser, kId:params.kId, hId:params.hId}})
        }else {
          if(params.comp == 'materi'){
            this.route.navigate(['/user-upload'], {queryParams: {hId: params.hId, kId:params.kId}});
          }else if(params.comp == 'quiz'){
            this.route.navigate(['/user-kuis'], {queryParams: {hId: params.hId, kId:params.kId}})
          }else{
            this.route.navigate(['/user'], {queryParams: {hId: params.hId, kId:params.kId}})
          }
        }
      })
    })
  }
}
