import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Materi } from 'src/app/layouts/model/materi';
import { Ujian } from 'src/app/layouts/model/ujian';
import { Observable } from 'rxjs';
import { FileUser } from 'src/app/layouts/model/file-user';
import { AppService } from 'src/app/service/app.service';
import { User } from 'src/app/layouts/model/users';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';
import { Message } from 'primeng/api/message';
import { Forum } from 'src/app/layouts/model/forum';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  dataUjian : Ujian[];
  fileInfos: Observable<any>;
  files: Observable<Ujian[]>;
  // materirespons = new MateriRespon()
  // selectedCity1: City;
  // name:string
  // dataKuis : Ujian[];
  jawab = new FileUser();
  tanggal = new Materi()
  login = new Login()
  msgs: Message[] = [];
  isupdated = false; 
  forum = new Forum()
  forums:any[]

  constructor(private sessionService: StorageService,private uploadService: AppService, private route: ActivatedRoute,private router: Router) { 
    this.jawab.user = new User()
    this.getForum()
    this.getAllUjian()
  }
  
  ngOnInit(): void {
  }
  
  // get(){
  //   this.routes.queryParams
  //     .subscribe(params => {
  //       this.tanggal.day=params.day 
  //       this.tanggal.week=params.week
  //       // console.log(params['day']);
                
  //   });
  // }

  getAllUjian(){
    this.route.queryParams
    .subscribe(params=>{
      console.log(params)
      this.uploadService.getAllKuis(params.hId).subscribe(data=>{
        this.dataUjian=data
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
  //  let blob:any = new Blob(this.fileInfos, { type: 'text/json; charset=utf-8' });
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
          this.uploadService.uploadUserUjian(this.jawab).subscribe(
          event => {
            this.isupdated=true;
            if(event==true){
              this.showSuccess()
            }else{
              this.showError()
            }

        //     if (event.type === HttpEventType.UploadProgress) {
        //       this.progress = Math.round(100 * event.loaded / event.total);
        //     } else if (event instanceof HttpResponse) {
        //       this.message = event.body.message;
        //     }
          },
          err => {
            this.progress = 0;
            this.message = 'Could not upload the file!';
            this.currentFile = undefined;
          }) 
        // this.selectedFiles = undefined;
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

  setForum(){
    this.login = this.sessionService.getId()
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.setForumKuis(params.hId, this.forum.isiPesan, this.login.idUser).subscribe(data=>{
        this.forum=data
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
}
