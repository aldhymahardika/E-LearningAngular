import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Category } from 'src/app/layouts/model/category';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';
import { Message } from 'primeng/api/message';

@Component({
  selector: 'app-enrol',
  templateUrl: './enrol.component.html',
  styleUrls: ['./enrol.component.css']
})
export class EnrolComponent implements OnInit {
  login = new Login()
  kondisi:boolean
  msgs: Message[] = [];
  isupdated = false;
  constructor(private sessionService: StorageService,private route: Router, private uploadService: AppService, private router: ActivatedRoute) { }

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
    this.login = this.sessionService.getId()
    this.router.queryParams
    .subscribe(params => {
      console.log(params);
      this.uploadService.cekClass(this.login.idUser, params.jamid, params.kId).subscribe(data=>{
        this.kondisi=data
        console.log(data)
        if(this.kondisi==false){
          this.isupdated = true
          this.showError()
          this.route.navigate(['/tables'], {queryParams: {uId:this.login.idUser, id: params.id,kId:params.kId, jamid:params.jamid, nama:params.nama, title:params.title}})
        }else{
          this.uploadService.setEnrol(params.kId, this.login.idUser).subscribe(data=>{
          this.route.navigate(['/topic-materi'], {queryParams: {uId:this.login.idUser, id: params.id,kId:params.kId, jamid:params.jamid, nama:params.nama, title:params.title}})
          })
        }
      })
     })
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:'Cannot enrol, because you have been added in another class'});
  }

}
