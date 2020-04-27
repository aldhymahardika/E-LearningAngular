import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Category } from 'src/app/layouts/model/category';

@Component({
  selector: 'app-enrol',
  templateUrl: './enrol.component.html',
  styleUrls: ['./enrol.component.css']
})
export class EnrolComponent implements OnInit {

  kondisi:boolean
  constructor(private route: Router, private uploadService: AppService, private router: ActivatedRoute) { }

  // idMateri:Category
  // materi:Category
  ngOnInit(): void {
  }

  // getMateri(){
  //  this.uploadService.getMateriUser().subscribe(data=>{
  //   //  this.idMateri = data
  //  })
  // }

  enrol(){
    // let idMateri = '1'
    let idPengajar='1'
    let idUser='1'
    this.router.queryParams
    .subscribe(params => {
      console.log(params);
      this.uploadService.cekClass(idUser, params.jamid, params.kId).subscribe(data=>{
        this.kondisi=data
        console.log(data)
      if(this.kondisi==false){
        this.route.navigate(['/tables'], {queryParams: {id:params.id, kId:params.kId, jamid:params.jamid}})
      }else{
        this.uploadService.setEnrol(params.kId, idUser).subscribe(data=>{
        this.route.navigate(['/topic-materi'], {queryParams: {id:params.id, kId:params.kId, jamid:params.jamid}})
    })
  }
  })
  })
  }

  // cek(){
  //   let idUser='1'
  //   this.router.queryParams
  //   .subscribe(params => {
  //     this.uploadService.cekClass(idUser, params.jamid, params.kId).subscribe(data=>{
  //       this.kondisi=data
  //       console.log(data)
  //     if(this.kondisi==false){
  //       this.route.navigate(['/tables'], {queryParams: {id:params.id}})
  //     }
  //   })
  
  // }
}
