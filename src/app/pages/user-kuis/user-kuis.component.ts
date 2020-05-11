import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ujian } from 'src/app/layouts/model/ujian';
import { FileUser } from 'src/app/layouts/model/file-user';
import { Observable } from 'rxjs';
import { User } from 'src/app/layouts/model/users';
import { Forum } from 'src/app/layouts/model/forum';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';
import { Message } from 'primeng/api/message';

@Component({
  selector: 'app-user-kuis',
  templateUrl: './user-kuis.component.html',
  styleUrls: ['./user-kuis.component.css']
})
export class UserKuisComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  dataUjian : Ujian[];
  fileInfos: Observable<any>;
  files: Observable<Ujian[]>;
  dataKuis : Ujian[];
  jawab = new FileUser();
  forums:any[]
  forum = new Forum()
  login = new Login()
  msgs: Message[] = [];
  isupdated = false;
  title:string

  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router, private sessionService: StorageService) {
    this.jawab.user = new User()
   }

  ngOnInit(): void {
    this.title=this.sessionService.getTopic()
    this.getAllKuis()
    this.getForum()
  }

  getAllKuis(){
    this.route.queryParams
    .subscribe(params=>{
      console.log(params)
      this.uploadService.getAllKuis(params.hId).subscribe(data=>{
        this.dataKuis=data
        console.log(data);
      })
    })
  }

  gets(datas){
    this.route.queryParams
    .subscribe(params => {
   let resp = this.uploadService.downloadKuisUser(datas).subscribe((data) => 
   { const url= window.URL.createObjectURL(data)
   window.open(url) 
   })
  }) 
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  setUpload(){
      this.route.queryParams
        .subscribe(params => {
          this.login = this.sessionService.getId()
          console.log(params);
          this.jawab.file = this.selectedFiles.item(0);
          this.jawab.headerid=params.hId
          this.jawab.user.userId=this.login.idUser
          console.log(this.jawab)
          this.uploadService.uploadUser(this.jawab).subscribe(
          event => {
            this.isupdated=true
            if(event==true){
              this.showSuccess()              
            }else{
              this.showError()
            }   
          },
          err => {
            this.progress = 0;
            this.message = 'Could not upload the file!';
            this.currentFile = undefined;
          }) 
        // this.selectedFiles = undefined;
    })
  }

  setForum(){
    this.login = this.sessionService.getId()
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.setForumKuis(params.hId, this.forum.isiPesan, this.login.idUser).subscribe(data=>{
        this.forum=data
      },
      err=>{
        this.forum.isiPesan=""
        this.getAllKuis()
        this.getForum()
      })
    })
  }

  getForum(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getForumKuis(params.hId).subscribe(data=>{
        this.forums=data
        console.log(data);
      })
    })
  }

  showSuccess() {
    this.msgs = [];
	  this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
  }

  getBack(){
    this.route.queryParams.subscribe(params=>{
      this.router.navigate(['/topic-materi'], {queryParams:{kId:params.kId}})
    })
  }
}
