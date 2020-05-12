import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Materi } from 'src/app/layouts/model/materi';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/service/app.service';
import { FileUser } from 'src/app/layouts/model/file-user';
import { Category } from 'src/app/layouts/model/category';
import { Pengajar } from 'src/app/layouts/model/pengajar';
import { User } from 'src/app/layouts/model/users';
import { Forum } from 'src/app/layouts/model/forum';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';

@Component({
  selector: 'app-user-upload',
  templateUrl: './user-upload.component.html',
  styleUrls: ['./user-upload.component.css']
})
export class UserUploadComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  dataMateri : Materi[];
  fileInfos: Observable<any>;
  fileUrl;
  jawab = new FileUser()
  forum = new Forum()
  forums:any[]
  login = new Login()
  title:string
  kId:string
  spinner:boolean=false
  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router, private sessionService: StorageService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
          this.router.navigated = false;
          window.scrollTo(0, 0    );
      }
  });
    this.jawab.user= new User()    
  }
  
  ngOnInit(): void {
    this.title=this.sessionService.getTopic()
    this.getALlMateri()
    this.getForum()
  }

  gets(datas){
    this.spinner=true
    this.route.queryParams
    .subscribe(params => {
    let resp = this.uploadService.downloadMateriUser(datas).subscribe((data) => 
    { const url= window.URL.createObjectURL(data)
      window.open(url) 
      this.spinner=false
    },
    err=>{
      this.spinner=false
    })
  }) 
  }

  getALlMateri(){
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
    this.uploadService.getAllMateri(params.hId).subscribe(data=>{
      this.dataMateri=data
      console.log(data);
      
      })
    })
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  setForum(){
    this.route.queryParams
    .subscribe(params=>{
      this.login = this.sessionService.getId()
      this.forum.isiPesan
      let ser = this.uploadService.setForum(params.hId, this.forum.isiPesan, this.login.idUser );
      ser.subscribe(data=>{
        this.loadForum(params.hId)
        this.forum.isiPesan=""
        this.getALlMateri()
        this.getForum()
      },
      err=>{

      })
    })
  }

  getForum(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getForum(params.hId).subscribe(data=>{
        this.forums=data
        console.log(data);
      })
    })
  }

  loadForum(hId:string){
    this.uploadService.getForum(hId).subscribe(data=>{
      this.forums=data
    })
  }

  getBack(){
    this.kId = this.sessionService.getKelas()
    this.route.queryParams.subscribe(params=>{
      this.router.navigate(['/topic-materi'], {queryParams:{kId:this.kId}})
    })
  }
}
