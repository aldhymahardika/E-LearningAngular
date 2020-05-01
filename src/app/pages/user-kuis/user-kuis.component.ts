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
  // materirespons = new MateriRespon()
  // selectedCity1: City;
  // name:string
  dataKuis : Ujian[];
  jawab = new FileUser();
  forums:any[]
  forum = new Forum()
  login = new Login()

  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router, private sessionService: StorageService) {
    this.jawab.user = new User()
    this.getAllKuis()
    this.getForum()
   }

  ngOnInit(): void {
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
          this.uploadService.uploadUser(this.jawab).subscribe(
          event => {
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
