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
  jawab = new FileUser();
  tanggal = new Materi()
  login = new Login()
  msgs: Message[] = [];
  isupdated = false; 
  forum = new Forum()
  forums:any[]
  spinner=false
  spinner2=false
  title:string
  constructor(private sessionService: StorageService,private uploadService: AppService, private route: ActivatedRoute,private router: Router) { 
    this.jawab.user = new User()
    
  }
  
  ngOnInit(): void {
    this.title=this.sessionService.getTopic()
    this.getForum()
    this.getAllUjian()
  }
  
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
    this.spinner2=true
    this.route.queryParams
    .subscribe(params => {
   let resp = this.uploadService.downloadKuisUser(datas).subscribe((data) => 
   { const url= window.URL.createObjectURL(data)
   window.open(url)
   this.spinner2=false 
   },
   err=>{
    this.spinner2=false
   })
  }) 
  //  let blob:any = new Blob(this.fileInfos, { type: 'text/json; charset=utf-8' });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  setUpload(){
    this.spinner=true
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
              this.spinner=false
              this.showSuccess()
            }else{
              this.spinner=false
              this.showError()
            }
          },
          err => {
            this.progress = 0;
            this.message = 'Could not upload the file!';
            this.currentFile = undefined;
          }) 
    })
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success',summary:'Sukses', detail:'Data Berhasil Diupload'});
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error', detail:'Data Gagal Diupload'});
  }

  setForum(){
    this.login = this.sessionService.getId()
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.setForumKuis(params.hId, this.forum.isiPesan, this.login.idUser).subscribe(data=>{
        this.forum.isiPesan=""
        this.getForum()
        this.getAllUjian()
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

  getBack(){
    this.route.queryParams.subscribe(params=>{
      this.router.navigate(['/topic-materi'], {queryParams:{kId:params.kId}})
    })
  }
}
